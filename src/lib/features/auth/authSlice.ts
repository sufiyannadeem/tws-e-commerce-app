import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },

    removeCurrentUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setAuthenticated,
  setCurrentUser,
  removeCurrentUser,
} = authSlice.actions;

export default authSlice.reducer;
