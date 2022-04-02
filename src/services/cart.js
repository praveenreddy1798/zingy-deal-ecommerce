import axios from "axios";
import { useEffect, useState } from "react";
import { useProducts, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryCartProducts = () => {
  const { productsDispatch } = useProducts();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "/api/user/cart",
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.cart) {
      productsDispatch({
        type: "SET_CART_PRODUCTS",
        payload: data.cart,
      });
    }
  }, [data?.cart, productsDispatch]);
  return { loading, error };
};

export const useAddToCart = () => {
  const [enabled, setEnabled] = useState(false);
  const [product, setProduct] = useState(null);
  const { productsDispatch } = useProducts();
  const {
    auth: { token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "POST",
    url: "/api/user/cart",
    token,
    payload: product,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addToCart = (product) => {
    setEnabled(true);
    setProduct({ product });
  };
  useEffect(() => {
    if (data?.cart) {
      productsDispatch({
        type: "SET_CART_PRODUCTS",
        payload: data.cart,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.CART.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.CART.ERROR,
        },
      });
    }
  }, [data?.cart, errorMessage, productsDispatch, toastDispatch]);
  return { loading, addToCart };
};

export const useRemoveFromCart = () => {
  const [url, setUrl] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const { productsDispatch } = useProducts();
  const {
    auth: { token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "DELETE",
    url,
    token,
  };
  const removeFromCart = (url) => {
    setEnabled(true);
    setUrl(url);
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.cart) {
      productsDispatch({
        type: "SET_CART_PRODUCTS",
        payload: data.cart,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.CART.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.CART.ERROR,
        },
      });
    }
  }, [data?.cart, errorMessage, productsDispatch, toastDispatch]);
  return { loading, removeFromCart };
};

export const useHandleCartQuantity = () => {
  const [enabled, setEnabled] = useState(false);
  const [action, setAction] = useState(null);
  const [productId, setProductId] = useState(null);
  const { productsDispatch } = useProducts();
  const {
    auth: { token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const axiosParam = {
    method: "POST",
    url: `/api/user/cart/${productId}`,
    payload: action,
    token,
  };

  const handleCartQuantity = (id, type) => {
    setEnabled(true);
    setAction({ action: { type } });
    setProductId(id);
  };
  const { data, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.cart) {
      const {
        action: { type },
      } = action;
      productsDispatch({
        type: "SET_CART_PRODUCTS",
        payload: data.cart,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage:
            type === "increment"
              ? MESSAGES.CART_QUANTITY.INCREASED
              : MESSAGES.CART_QUANTITY.DECREASED,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.CART.ERROR,
        },
      });
    }
  }, [data?.cart, errorMessage, productsDispatch, toastDispatch, action]);
  return { handleCartQuantity };
};

export const useMoveCartToWishlist = () => {
  const { productsDispatch } = useProducts();
  const {
    auth: { isAuth, token },
  } = useAuth();
  const { toastDispatch } = useToast();
  const headers = isAuth ? { authorization: token } : null;
  const moveCartToWishlist = async (product) => {
    const id = product._id;
    try {
      const cartRemovalPromise = axios({
        url: `/api/user/cart/${id}`,
        method: "DELETE",
        headers,
      });
      const wishlistAddPromise = axios({
        url: "/api/user/wishlist",
        method: "POST",
        headers,
        data: { product },
      });
      const [cartResponse, wishlistResponse] = await Promise.all([
        cartRemovalPromise,
        wishlistAddPromise,
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
          successMessage: MESSAGES.CART_TO_WISHLIST.ADD,
          errorMessage: null,
        },
      });
    } catch (error) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.CART_TO_WISHLIST.ERROR,
        },
      });
    }
  };
  return { moveCartToWishlist };
};
