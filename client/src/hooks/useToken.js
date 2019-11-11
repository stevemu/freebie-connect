import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";

function useToken() {
  let [token, setToken] = useState(null);
  const { loading, getTokenSilently, isAuthenticated } = useAuth0();

  async function getToken() {
    let token = await getTokenSilently();
    setToken(token);
  }

  useEffect(() => {
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated]);

  // if (loading) {
  //   return [null];
  // } else {
  //   run();
  // }
  return [token];
}

export default useToken;
