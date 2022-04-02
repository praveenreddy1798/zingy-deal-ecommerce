import { useEffect, useState } from "react";
import axios from "axios";
import { useProducts, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryWishlistProducts = () => {
  const { productsDispatch } = useProducts();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "/api/user/wishlist",
    token,
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
  const {
    auth: { token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "POST",
    url: "/api/user/wishlist",
    token,
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
  const {
    auth: { token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "DELETE",
    url,
    token,
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

export const useMoveWishlistToCart = () => {
  const { productsDispatch } = useProducts();
  const {
    auth: { isAuth, token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const headers = isAuth ? { authorization: token } : null;
  const moveWishlistToCart = async (product) => {
    const id = product._id;
    try {
      const wishlistRemovalPromise = axios({
        url: `/api/user/wishlist/${id}`,
        method: "DELETE",
        headers,
      });
      const cartAddPromise = axios({
        url: "/api/user/cart",
        method: "POST",
        headers,
        data: { product },
      });
      const [wishlistResponse, cartResponse] = await Promise.all([
        wishlistRemovalPromise,
        cartAddPromise,
      ]);
      const {
        data: { cart },
      } = cartResponse;
      const {
        data: { wishlist },
      } = wishlistResponse;
      productsDispatch({
        type: "SET_CART_WISHLIST_PRODUCTS",
        payload: { cart, wishlist },
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.WISHLIST_TO_CART.ADD,
          errorMessage: null,
        },
      });
    } catch (error) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.WISHLIST_TO_CART.ERROR,
        },
      });
    }
  };
  return { moveWishlistToCart };
};
