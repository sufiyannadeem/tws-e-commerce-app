"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAuthenticated,
  setCurrentUser,
} from "@/lib/features/auth/authSlice";
import fetchData from "@/lib/fetchDataFromApi";

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetchData.get("/auth/me");

        if (response?.data) {
          const user = response.data;

          dispatch(
            setCurrentUser({
              id: user.id || user._id?.toString(),
              name: user.name,
              email: user.email,
              role: user.role,
            })
          );

          dispatch(setAuthenticated(true));
        } else {
          dispatch(setAuthenticated(false));
          dispatch(setCurrentUser(null));
        }
      } catch (error) {
        console.log("User is not authenticated");

        dispatch(setAuthenticated(false));
        dispatch(setCurrentUser(null));
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return <>{children}</>;
}
