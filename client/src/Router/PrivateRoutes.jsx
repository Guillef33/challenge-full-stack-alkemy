import React, { useContext } from 'react'
import Login from '../components/login/Login';

// Protege las rutas a traves de un AuthContext
import { AuthContext } from '../Context/AuthContext';

import Home from '../pages/Home'


const PrivateRoute = ( props ) => {

 const {login} = useContext(AuthContext);
 console.log(login)

  return login ? props.children : <Login />
}

export default PrivateRoute