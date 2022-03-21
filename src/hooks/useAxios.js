import axios from "axios";
import { useState, useEffect } from "react";
export const useAxios = ({ url, method, body = null, headers = null }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const axiosRequest = async () => {
      try {
        const { data } = await axios.request({
          url,
          method,
          body,
          headers,
        });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    axiosRequest();
  }, [body, headers, method, url]);
  return { error, loading, data };
};
