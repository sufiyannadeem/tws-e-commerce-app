import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  originalId: string;
  title: string;
  price: number;
  amount?: number;
  image: string[];
  unit_of_measure: string;
  shop_category: string;
  selectedSize?: string;
  selectedColor?: string;
};

export interface CartState {
  cartItems: CartItem[];
  wishlists: AllProduct[];
  isCartOpen: boolean;
  countValue: number;
  selectedSize: string | undefined;
  selectedColor: string | undefined;
}

const getStoredItems = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const stored = window.localStorage.getItem(key);

    if (!stored) {
      return fallback;
    }

    return JSON.parse(stored) as T;
  } catch {
    return fallback;
  }
};

const initialState: CartState = {
  cartItems: getStoredItems<CartItem[]>("cartItems", []),
  wishlists: getStoredItems<AllProduct[]>("wishlists", []),
  isCartOpen: false,
  countValue: 1,
  selectedSize: undefined,
  selectedColor: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    handleCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const productId = action.payload.originalId;

      const existingItem = state.cartItems.find(
        (item) => item.originalId === productId
      );

      if (existingItem) {
        existingItem.selectedColor = action.payload.selectedColor;
        existingItem.selectedSize = action.payload.selectedSize;

        if (action.payload.amount !== undefined) {
          existingItem.amount = action.payload.amount;
        }

        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.cartItems)
        );

        return;
      }

      state.cartItems.push({
        ...action.payload,
        amount: action.payload.amount || 1,
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );

      state.selectedColor = undefined;
      state.selectedSize = undefined;
    },

    removeFromCart: (
      state,
      action: PayloadAction<string>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.originalId !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );

      state.countValue = 1;
      state.selectedColor = undefined;
      state.selectedSize = undefined;
    },

    incrementAmount: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = state.cartItems.find(
        (item) => item.originalId === action.payload
      );

      if (item) {
        item.amount = item.amount ? item.amount + 1 : 1;

        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.cartItems)
        );
      }
    },

    decrementAmount: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = state.cartItems.find(
        (item) => item.originalId === action.payload
      );

      if (!item) {
        return;
      }

      if (item.amount === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.originalId !== action.payload
        );

        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.cartItems)
        );

        return;
      }

      item.amount = item.amount ? item.amount - 1 : 1;

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    toggleToWishlists: (
      state,
      action: PayloadAction<AllProduct>
    ) => {
      const productId = action.payload.originalId;

      const existingItem = state.wishlists.find(
        (item) => item.originalId === productId
      );

      if (existingItem) {
        state.wishlists = state.wishlists.filter(
          (wishlist) => wishlist.originalId !== productId
        );
      } else {
        state.wishlists.push(action.payload);
      }

      localStorage.setItem(
        "wishlists",
        JSON.stringify(state.wishlists)
      );
    },

    handleCountValue: (
      state,
      action: PayloadAction<
        "increment" | "decrement" | "none"
      >
    ) => {
      if (action.payload === "none") {
        state.countValue = 1;
        return;
      }

      state.countValue =
        action.payload === "increment"
          ? state.countValue + 1
          : Math.max(1, state.countValue - 1);
    },

    handleColorChange: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedColor = action.payload;
    },

    handleSizeChange: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedSize = action.payload;
    },
  },
});

export const {
  addToCart,
  handleCountValue,
  incrementAmount,
  removeFromCart,
  decrementAmount,
  handleCartOpen,
  toggleToWishlists,
  handleColorChange,
  handleSizeChange,
} = cartSlice.actions;

export default cartSlice.reducer;
