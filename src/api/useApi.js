import { useState } from "react";

import { post, get } from "./config";

const useApi = (url, method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const execute = async (data, params, headers) => {
    setIsLoading(true);
    let result = null;
    try {
      if (method === "POST") {
        result = await post(url, data, headers);
      } else if (method === "GET") {
        result = await get(url, params, headers);
      }
      setIsLoading(false);
      setResponse(result);
      setError(null);
    } catch (error) {
      console.error("Error: ", error);
      setIsLoading(false);
      setError(error);
      setResponse(null);
    }
  };
  return {
    isLoading,
    response,
    error,
    execute,
  };
};

export default useApi;
