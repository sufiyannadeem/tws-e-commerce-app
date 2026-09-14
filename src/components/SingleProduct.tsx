"use client";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { useState } from "react";
import AddToCartBtnWrapper from "./AddToCartWrapper";
import AddToWishlist from "./AddToWishlist";
import Counter from "./Counter";
import HistoryBackBtn from "./HistoryBackBtn";
import RatingStar from "./RatingStar";
import ProductImageSlider from "./sliders/ProductImageSlider";
import SelectVariants from "./SelectVariants";

type SingleProductProps = {
  product: SingleProductType;
};

const OPTIONS: EmblaOptionsType = {};

const SingleProduct = ({ product }: SingleProductProps) => {
  const {
    originalId,
    title,
    image,
    shop_category,
    categories,
    unit_of_measure,
    price,
    rating,
  } = product;

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div className="container pb-16 pt-10">
      <HistoryBackBtn />

      <div className="flex gap-10 mt-6 flex-col md:flex-row">
        <div className="img w-full md:w-2/5 max-w-md mx-auto">
          <ProductImageSlider images={image} options={OPTIONS} />
        </div>

        <div className="right w-full md:w-3/5">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <AddToWishlist product={product} />
          </div>

          <RatingStar ratingNumber={rating} className="mt-2" />

          <div className="flex gap-3 items-end mt-4">
            <p className="text-2xl text-primary font-semibold">
              ${product.price.toFixed(2)}
            </p>

            {product?.oldPrice && (
              <del className="text-muted-foreground">
                ${product.oldPrice.toFixed(2)}
              </del>
            )}
          </div>

          {product?.amount && (
            <p className="mt-4 first-letter:capitalize">
              available {product.amount} {unit_of_measure}
            </p>
          )}

          <p className="mt-4 text-muted-foreground">
            {product?.description}
          </p>

          <div className="flex gap-x-4 items-center flex-wrap">
            {product?.colors && product.colors.length > 0 && (
              <div className="mt-4">
                <SelectVariants
                  colors={product.colors}
                  productId={originalId}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>
            )}

            {product?.sizes && product.sizes.length > 0 && (
              <div className="mt-4">
                <SelectVariants
                  sizes={product.sizes}
                  productId={originalId}
                  selectedSize={selectedSize}
                  onSizeChange={setSelectedSize}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4 items-center mt-5">
            <Counter
              quantity={product?.amount}
              product={{
                originalId,
                title,
                image: [image[0]],
                price,
                unit_of_measure,
                shop_category,
              }}
            />

            <AddToCartBtnWrapper
              btnStyle="withoutCounter"
              product={{
                originalId,
                title,
                description: product.description || "",
                price,
                categories: categories || [],
                image,
                unit_of_measure,
                shop_category,
              }}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
          </div>

          <div className="mt-6">
            <Link
              href={`/shop/${shop_category}`}
              className="text-primary hover:underline"
            >
              More products from {shop_category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
