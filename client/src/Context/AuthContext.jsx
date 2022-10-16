import React, { useState, createContext, useEffect } from "react";

import Axios from "axios";

import Swal from "sweetalert2";



export const AuthContext = createContext(null);

const AuthProvider = (props) => {

  const [user, setUser] = useState([])
  const [loginStatus, setLoginStatus] = useState("");
  const [login, setLogin] = useState(false)



  const loginValidations = (email, password) => {


  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      if (email === "" || password === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Los campos no pueden estar vacios',
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
      return;
    }

    if (email === "" && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Debes escribir una direccion de correo electronico valida',
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
      return;
    }

    Swal.fire({
      title: "Todo bien",
      text: "Bienvenido a Facturas App",
      icon: "success",
      confirmButtonText: "Continuar"
    })
    setLogin(true)

  }

 console.log(login)

  return (
    <AuthContext.Provider
      value={{
        loginValidations,
        user,
        loginStatus,
        login,
        setUser,
        setLogin,
        setLoginStatus
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
