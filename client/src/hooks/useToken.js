import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";

function useToken() {
  let [token, setToken] = useState(null);
  const { loading, getTokenSilently } = useAuth0();

  async function run() {
    let token = await getTokenSilently();
    setToken(token);
  }

  if (loading) {
    return [null];
  } else {
    run();
  }
  return [token];
}

export default useToken;
