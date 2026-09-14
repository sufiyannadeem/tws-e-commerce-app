import fetchData from "@/lib/fetchDataFromApi";
import layoutSettings from "@/lib/layoutSettings";
import ProductCard from "./cards/ProductCard";

type RelatedProductsProps = {
  category: string;
  shop_category: string;
};

const RelatedProducts = async ({
  category,
  shop_category,
}: RelatedProductsProps) => {
  try {
    const res = await fetchData.get("/products", {
      limit: "5",
      shop_category,
      categories: category,
    });

    const products: AllProduct[] = res.data?.products || [];
    const settings = layoutSettings?.[shop_category];

    if (!settings) {
      return null;
    }

    return (
      <>
        {products.map((product) => (
          <ProductCard
            product={product}
            variants={settings.productCardVariants}
            key={product.originalId}
          />
        ))}
      </>
    );
  } catch (error) {
    console.error(
      `Failed to load related products for ${shop_category}/${category}:`,
      error
    );

    return null;
  }
};

export default RelatedProducts;
