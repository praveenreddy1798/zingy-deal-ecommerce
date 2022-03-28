import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useToast, useProducts } from "../../context";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils";

export const useLogin = () => {
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  const { productsDispatch } = useProducts();
  const { setAuth } = useAuth();
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
      const foundUser = data.foundUser;
      const { wishlist, cart } = foundUser;
      localStorage.setItem("token", data.encodedToken);
      setAuth({
        isAuth: true,
        token: data?.encodedToken,
        userDetails: foundUser,
      });
      productsDispatch({
        type: "SET_WISHLIST_CART_PRODUCTS",
        payload: { wishlist, cart },
      });
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
    data?.foundUser,
    setAuth,
  ]);
  return {
    token: data?.encodedToken,
    loading,
    requestLogin,
  };
};
