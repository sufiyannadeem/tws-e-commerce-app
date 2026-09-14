
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/lib/models/product';
import { requireAuth } from '@/lib/auth/utils';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const query: any = {};

    // Search by title or description
    const search = searchParams.get('search');

    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');

      query.$or = [
        { title: searchRegex },
        { description: searchRegex }
      ];
    }

    // Filter by shop category
    const shopCategory = searchParams.get('shop_category');

    if (shopCategory && shopCategory.trim() !== '') {
      query.shop_category = shopCategory.trim();
    }

    // Filter by categories
    const categoriesParam = searchParams.get('categories');

    if (categoriesParam && categoriesParam.trim() !== '') {
      const categories = categoriesParam
        .split(',')
        .map(category => category.trim())
        .filter(Boolean);

      if (categories.length > 0) {
        query.categories = { $in: categories };
      }
    }

    // Filter by price range
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    if (
      (minPrice && minPrice.trim() !== '') ||
      (maxPrice && maxPrice.trim() !== '')
    ) {
      query.price = {};

      if (minPrice && minPrice.trim() !== '') {
        const parsedMinPrice = parseFloat(minPrice);

        if (!Number.isNaN(parsedMinPrice)) {
          query.price.$gte = parsedMinPrice;
        }
      }

      if (maxPrice && maxPrice.trim() !== '') {
        const parsedMaxPrice = parseFloat(maxPrice);

        if (!Number.isNaN(parsedMaxPrice)) {
          query.price.$lte = parsedMaxPrice;
        }
      }

      // Remove empty price query if values were invalid
      if (Object.keys(query.price).length === 0) {
        delete query.price;
      }
    }

    // Pagination
    const pageParam = searchParams.get('page');
    const limitParam = searchParams.get('limit');

    let page = parseInt(pageParam || '1', 10);
    let limit = parseInt(limitParam || '10', 10);

    // Protect against invalid pagination values
    if (Number.isNaN(page) || page < 1) {
      page = 1;
    }

    if (Number.isNaN(limit) || limit < 1) {
      limit = 10;
    }

    const skip = (page - 1) * limit;

    // Sorting
    let sort: any = { createdAt: -1 };

    const sortParam = searchParams.get('sort');

    if (sortParam && sortParam.trim() !== '') {
      const [field, order] = sortParam.split(':');

      if (field && field.trim() !== '') {
        sort = {
          [field.trim()]: order === 'desc' ? -1 : 1
        };
      }
    }

    // Fetch products
    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    // Count total products
    const total = await Product.countDocuments(query);

    return NextResponse.json({
      products,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);

    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAuth(request);

    if (auth.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    await dbConnect();

    const body = await request.json();

    const product = await Product.create(body);

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error('Error creating product:', error);

    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      {
        status:
          error.message === 'Authentication required'
            ? 401
            : 500
      }
    );
  }
}


