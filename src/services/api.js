import { useEffect } from "react";
import { useProducts } from "../context/products";
import { useAxios } from "../hooks";
import { getProductsWithSortByPriceAndRatingApplied } from "../utils";

export const useQueryAllProducts = (url) => {
  const { productsDispatch } = useProducts();
  const axiosParam = {
    method: "GET",
    url,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.products) {
      const productsWithDefaultFilters =
        getProductsWithSortByPriceAndRatingApplied(
          data.products,
          "low_to_high",
          5
        );
      productsDispatch({
        type: "SET_PRODUCTS",
        payload: productsWithDefaultFilters,
      });
    }
  }, [data?.products, productsDispatch]);
  return { loading, error };
};
