import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    console.log("get token");
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log(userToken)
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}