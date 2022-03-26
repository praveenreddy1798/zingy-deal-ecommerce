import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useProducts } from "../context/products";
import { useToast } from "../context/toast";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryWishlistProducts = () => {
  const { productsDispatch } = useProducts();
  const axiosParam = {
    method: "GET",
    url: "/api/user/wishlist",
    token: localStorage.getItem("token"),
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.wishlist) {
      productsDispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: data.wishlist,
      });
    }
  }, [data?.wishlist, productsDispatch]);
  return { loading, error };
};

export const useAddToWishlist = () => {
  const [enabled, setEnabled] = useState(false);
  const [product, setProduct] = useState(null);
  const { productsDispatch } = useProducts();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "POST",
    url: "/api/user/wishlist",
    token: localStorage.getItem("token"),
    payload: product,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addToWishlist = (product) => {
    setEnabled(true);
    setProduct({ product });
  };
  useEffect(() => {
    if (data?.wishlist) {
      productsDispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: data.wishlist,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.WISHLIST.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.WISHLIST.ERROR,
        },
      });
    }
  }, [data?.wishlist, errorMessage, productsDispatch, toastDispatch]);
  return { loading, addToWishlist };
};

export const useRemoveFromWishlist = () => {
  const [url, setUrl] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [product, setProduct] = useState(null);
  const { productsDispatch } = useProducts();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "DELETE",
    url,
    token: localStorage.getItem("token"),
    payload: product,
  };
  const removeFromWishlist = (url, product) => {
    setEnabled(true);
    setUrl(url);
    setProduct({ product });
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.wishlist) {
      productsDispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: data.wishlist,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.WISHLIST.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.WISHLIST.ADD,
        },
      });
    }
  }, [data?.wishlist, errorMessage, productsDispatch, toastDispatch]);
  return { loading, removeFromWishlist };
};
