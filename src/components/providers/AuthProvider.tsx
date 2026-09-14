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
    let mounted = true;

    const checkAuthStatus = async () => {
      try {
        const response = await fetchData.get("/auth/me");

        if (!mounted) return;

        if (response?.status === 200 && response?.data) {
          dispatch(setCurrentUser(response.data));
          dispatch(setAuthenticated(true));
        } else {
          dispatch(setCurrentUser(null));
          dispatch(setAuthenticated(false));
        }
      } catch (error: any) {
        if (!mounted) return;

        console.log(
          "User is not authenticated:",
          error?.response?.status || "unknown"
        );

        dispatch(setCurrentUser(null));
        dispatch(setAuthenticated(false));

        if (typeof window !== "undefined") {
          localStorage.removeItem("currentUser");
        }
      }
    };

    checkAuthStatus();

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return <>{children}</>;
}
