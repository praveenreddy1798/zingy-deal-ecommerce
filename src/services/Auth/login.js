import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products";
import { useToast } from "../../context/toast";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils";

export const useLogin = () => {
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  const { productsDispatch } = useProducts();
  const requestLogin = (url, payload) => {
    setPayload(payload);
    setEnabled(true);
    setUrl(url);
  };
  const axiosParam = {
    method: "POST",
    url,
    payload,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.encodedToken) {
      const {
        foundUser: { wishlist, cart },
      } = data.foundUser;
      localStorage.setItem("token", data.encodedToken);
      productsDispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: wishlist,
      });
      productsDispatch({ type: "SET_CART_PRODUCTS", payload: cart });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.LOGIN.SUCCESS,
          errorMessage: null,
        },
      });
      navigate("/");
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.LOGIN.ERROR,
        },
      });
    }
  }, [
    data?.encodedToken,
    errorMessage,
    toastDispatch,
    enabled,
    navigate,
    productsDispatch,
    data,
  ]);
  return {
    token: data?.encodedToken,
    loading,
    requestLogin,
  };
};
