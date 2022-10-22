import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import Axios from "axios";

import Swal from "sweetalert2";

import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import { Box, TextField, FormControl, Button } from "@mui/material";

function Login() {
  const { user, login, setUser, setLogin, setLoginStatus, loginValidations } =
    useContext(AuthContext);

  let navigate = useNavigate();

  const loginWeb = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginValidations(email, password);
    Axios.post("http://localhost:3050/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response.data);
      setUser(response.data[1]);

      if (response.data.message) {
        setLoginStatus(response.data.message);
        setLogin(false);
        Swal.fire({
          title: "Error!",
          text: `${response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      } else {
        setLogin(true);
        localStorage.setItem("loginState", login);
        localStorage.setItem("user", user);

        navigate("/dashboard");
      }
    });
  };

  console.log(user);

  Axios.defaults.withCredentials = true;

  return (
    <Box
      className="loginContainer"
      component="form"
      onSubmit={(e) => loginWeb(e)}
    >
      <FormControl fullWidth>
        <TextField
          type="email"
          placeholder="Ingrese su nombre"
          name="email"
          label="Email"
        />

        <TextField
          type="password"
          placeholder="Ingrese su password"
          name="password"
          label="Password"
        />

        <Button type="submit">Enviar</Button>
      </FormControl>
    </Box>
  );
}

export default Login;
