import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products";
import { useToast } from "../../context/toast";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils/constants";

export const useLogin = () => {
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const [url, setUrl] = useState(null);
  const [alertRequest, setAlertRequest] = useState(false);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  const { productsDispatch } = useProducts();
  const requestLogin = (url, payload) => {
    setPayload(payload);
    setEnabled(true);
    setUrl(url);
    setAlertRequest(!alertRequest);
  };
  const axiosParam = {
    method: "POST",
    url,
    body: {
      email: payload?.email,
      password: payload?.password,
    },
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.encodedToken) {
      const { encodedToken, foundUser } = data;
      const { wishlist, cart } = foundUser;
      localStorage.setItem("token", encodedToken);
      productsDispatch({ type: "SET_WISHLIST", payload: { wishlist } });
      productsDispatch({ type: "SET_CART", payload: { cart } });
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
    data,
    errorMessage,
    toastDispatch,
    enabled,
    navigate,
    alertRequest,
    productsDispatch,
  ]);
  return {
    token: data?.encodedToken,
    loading,
    requestLogin,
  };
};
