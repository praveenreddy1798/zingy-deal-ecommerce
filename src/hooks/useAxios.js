import axios from "axios";
import { useState, useEffect } from "react";
export const useAxios = (
  { url, method, body = null, headers = null },
  enabled = true
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const axiosRequest = async () => {
      try {
        const response = await axios({
          url,
          method,
          headers,
          data: { ...body },
        });
        const { data, status } = response;
        if (status >= 200 && status < 300 && data) {
          setData(data);
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (enabled) {
      axiosRequest();
    }
  }, [body, headers, method, url, enabled]);
  return { errorMessage, loading, data };
};
