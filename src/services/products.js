import { useEffect } from "react";
import { useProducts } from "../context/products";
import { useAxios } from "../hooks";

export const useQueryAllProducts = (url, searchParam) => {
  const { productsDispatch } = useProducts();
  const searchParamKey = Object.keys(searchParam)?.[0];
  const searchParamValue = Object.values(searchParam)?.[0];
  const axiosParam = {
    method: "GET",
    url,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.products) {
      productsDispatch({
        type: "SET_PRODUCTS",
        payload: { products: data.products, searchParamKey, searchParamValue },
      });
    }
  }, [data?.products, productsDispatch, searchParamKey, searchParamValue]);
  return { loading, error };
};
