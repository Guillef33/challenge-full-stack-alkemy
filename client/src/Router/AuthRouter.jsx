import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "../components/login/Login";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Register from "../Components/Register/Register";


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>

      <Route path="*" element={<LoginPage to="login" />} />
    </Routes>
  );
};

export default AuthRouter;
