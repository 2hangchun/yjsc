import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function NeedAuth(props) {
  const { token } = useSelector((state) => state.user);
  return token ? props.children : <Navigate to="/login" />;
}

export default NeedAuth;
