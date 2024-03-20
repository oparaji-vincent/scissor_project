import { useCallback, useState } from "react";
import PostResponse from "../modules/PostResponse";
import { useAuth } from "../firebase/auth";
type RequestConfig = {
  method: string,
  body: string
}



const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {authUser} = useAuth();
  const baseURL = `https://shorts.zictracks.com/api/shorturl?key=${authUser?.uid}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, workWithData: (data: PostResponse) => void) => {

      setLoading(true);
      const response = await fetch(baseURL, {
        method: requestConfig.method,
        body: (requestConfig?.body) ? requestConfig.body : "",
        headers: myHeaders,
        redirect: "follow"
      });

      if (!response.ok) {
        setError(true);
        throw new Error("Network request returned and error");
      }

      const data: PostResponse = await response.json();
      workWithData(data);
      setLoading(false);
    },
    [baseURL, myHeaders]
  );

  return { loading, error, sendRequest };
};

export default useFetch;