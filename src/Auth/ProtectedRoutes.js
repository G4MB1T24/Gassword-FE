import React, { useContext } from "react";
import Login from "../Auth/Login";
import { Outlet } from "react-router-dom";
import DataContext from "../Contexts/DataContext";
let isAuth;



const ProtectedRoutes = () => {
  const context = useContext(DataContext);
  const { isAuthenticated } = context;
  if (isAuthenticated === true) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  if (localStorage.getItem("isLoggedin") === "true") {
    isAuth = true;
  } else {
    isAuth = false;
  }
  return isAuth ? <Outlet /> : <Login></Login>;
};

export default ProtectedRoutes;
