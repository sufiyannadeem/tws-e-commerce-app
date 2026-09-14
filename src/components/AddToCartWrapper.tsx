"use client";

import {
  CartItem,
  addToCart,
  decrementAmount,
  handleCountValue,
  incrementAmount,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiBasketFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

type AddToCartWrapperProps = {
  product: AllProduct;
  btnStyle?: "style-1" | "style-2" | "style-3" | "style-4" | "withoutCounter";
  selectedColor?: string;
  selectedSize?: string;
};

const AddToCartBtnWrapper = ({
  product,
  btnStyle = "style-1",
  selectedColor,
  selectedSize,
}: AddToCartWrapperProps) => {
  const router = useRouter();

  const [addedItem, setAddedItem] = useState<undefined | CartItem>();
  const [disableBtn, setDisableBtn] = useState(true);

  const { cartItems, countValue } = useAppSelector(
    (state) => state.cartSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setAddedItem(
      cartItems.find(
        (item) => item.originalId === product.originalId
      )
    );
  }, [product.originalId, cartItems]);

  useEffect(() => {
    dispatch(handleCountValue("none"));
  }, [product.originalId, dispatch]);

  const handleAddToCart = (withCounter: boolean) => {
    if (product.shop_category === "clothing") {
      if (!selectedColor || !selectedSize) {
        router.push(`/products/${product.originalId}`);
        return;
      }

      if (withCounter) {
        if (addedItem) {
          dispatch(removeFromCart(product.originalId));
        } else {
          dispatch(
            addToCart({
              ...product,
              selectedColor,
              selectedSize,
              amount: countValue,
            })
          );
        }
      } else {
        dispatch(
          addToCart({
            ...product,
            selectedColor,
            selectedSize,
            amount: countValue,
          })
        );
      }

      return;
    }

    if (withCounter) {
      if (addedItem) {
        dispatch(removeFromCart(product.originalId));
      } else {
        dispatch(
          addToCart({
            ...product,
            amount: countValue,
          })
        );
      }
    } else {
      dispatch(
        addToCart({
          ...product,
          amount: 1,
        })
      );
    }
  };

  useEffect(() => {
    if (product.shop_category === "clothing") {
      setDisableBtn(!(selectedColor && selectedSize));
    } else {
      setDisableBtn(false);
    }
  }, [selectedColor, selectedSize, product.shop_category]);

  const Counter = () => (
    <div className="flex w-full sm:w-auto relative z-10 items-center bg-background rounded-lg overflow-hidden border">
      <Button
        type="button"
        variant="outline"
        className="h-9 w-9 rounded-none border-none"
        onClick={() =>
          dispatch(decrementAmount(product.originalId))
        }
      >
        -
      </Button>

      <span className="px-3 flex-1 text-center">
        {addedItem?.amount}
      </span>

      <Button
        type="button"
        variant="outline"
        className="h-9 w-9 rounded-none border-none"
        onClick={() =>
          dispatch(incrementAmount(product.originalId))
        }
      >
        +
      </Button>
    </div>
  );

  return (
    <>
      {btnStyle === "withoutCounter" && (
        <Button
          className="flex gap-2 items-center w-fit px-5 text-sm sm:basis-1/2 sm:w-auto sm:text-base"
          type="button"
          onClick={() => handleAddToCart(true)}
          disabled={disableBtn}
        >
          <span className="text-lg">
            <FaShoppingCart />
          </span>

          <span>{addedItem ? "Added" : "Add to cart"}</span>
        </Button>
      )}

      {btnStyle === "style-1" && (
        <>
          {!addedItem ? (
            <Button
              className="w-full flex gap-2 items-center text-xs sm:text-base relative z-10"
              type="button"
              onClick={() => handleAddToCart(false)}
            >
              <span className="text-lg">
                <FaShoppingCart />
              </span>

              <span>Add To Cart</span>
            </Button>
          ) : (
            <Counter />
          )}
        </>
      )}

      {btnStyle === "style-2" && (
        <>
          {!addedItem ? (
            <Button
              type="button"
              className="bg-transparent border-input text-primary flex gap-2 items-center rounded-3xl hover:bg-primary hover:text-white text-xs sm:text-base w-full sm:w-auto relative z-10"
              onClick={() => handleAddToCart(false)}
            >
              <span className="text-xl">
                <PiBasketFill />
              </span>

              <span>Cart</span>
            </Button>
          ) : (
            <Counter />
          )}
        </>
      )}

      {btnStyle === "style-3" && (
        <>
          {!addedItem ? (
            <Button
              className="hover:bg-primary hover:text-white"
              type="button"
              variant="outline"
              title="Add to cart"
              onClick={() => handleAddToCart(false)}
            >
              <span className="text-sm sm:text-base">
                Add To Cart
              </span>
            </Button>
          ) : (
            <Counter />
          )}
        </>
      )}

      {btnStyle === "style-4" && (
        <>
          {!addedItem ? (
            <Button
              className="h-8 w-full sm:w-8 hover:bg-primary hover:text-white"
              type="button"
              variant="outline"
              title="Add to cart"
              onClick={() => handleAddToCart(false)}
            >
              <span className="text-lg">+</span>
            </Button>
          ) : (
            <Counter />
          )}
        </>
      )}
    </>
  );
};

export default AddToCartBtnWrapper;
