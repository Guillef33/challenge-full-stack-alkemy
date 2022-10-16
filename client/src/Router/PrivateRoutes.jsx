import React, { useContext } from 'react'
import Login from '../components/login/Login';
import LoginPage from '../Pages/LoginPage'

// Protege las rutas a traves de un AuthContext
import { AuthContext } from '../Context/AuthContext';

import Home from '../pages/Home'


const PrivateRoute = ( props ) => {

 const {login} = useContext(AuthContext);
//  console.log(login)

  return login ? props.children : <LoginPage />
}

export default PrivateRoute