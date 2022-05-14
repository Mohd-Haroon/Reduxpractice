import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Login";

import { login, loginFailure } from "../../auth/action";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (payload) => {
    login(dispatch,payload)
  };
  React.useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};
