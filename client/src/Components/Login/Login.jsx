import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import Axios from "axios";

import Swal from 'sweetalert2';

import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {

  const {
      user,
      login,
      setUser,
      setLogin,
      setLoginStatus,
      loginValidations
  } = useContext(AuthContext); 

  let navigate = useNavigate();


  const loginWeb = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    loginValidations(email, password)
    setUser(email, password)
    Axios.post("http://localhost:3050/login", {
      email: email,
      password: password,
    }).then((response) => {

    console.log(response.data)

    if (response.data.message) {
      setLoginStatus(response.data.message)
      setLogin(false)
      Swal.fire({
        title: 'Error!',
        text: `${response.data.message}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      // setLoginStatus(response.data.[0].email)
      setLogin(true)
      navigate("/dashboard");
    }
  })
  }

  console.log(login)


  Axios.defaults.withCredentials = true;

    return (
    <div className="loginContainer">
      <form onSubmit={(e) => loginWeb(e)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingrese su nombre"
          name="email"
        />
        <label>Password</label>

        <input
          type="password"
          placeholder="Ingrese su password"
          name="password"
        />

        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
