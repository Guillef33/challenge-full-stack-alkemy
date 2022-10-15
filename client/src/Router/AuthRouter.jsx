import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from "../components/login/Login";
import LoginPage from '../Pages/LoginPage';
import LogoutPage from '../Pages/LogoutPage';

// Para cualquier ruta, mostramos el path '*' y con un componente Login que redirige a /login

const AuthRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="logout" element={<LogoutPage />}></Route>
        {/* <Route path="register" element={<Register />} /> */}

        {/*Si no estoy logueado me mando a login siempre*/}
        <Route path='*' element={<LoginPage to="login" />}/>

    </Routes>
  )
}

export default AuthRouter