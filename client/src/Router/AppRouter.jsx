import React from 'react';
import AuthRouter from './AuthRouter';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Pages/Home';

import FacturasAppRouter from './FacturasAppRouter';
import PrivateRoute from './PrivateRoutes';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='auth/*' element={ <AuthRouter /> } />
            <Route path='/' element={<Home /> }
            />
            <Route path='/*' element={ 
                <PrivateRoute>
                    <FacturasAppRouter />
                </PrivateRoute>
            }/> 
        </Routes>
    </Router>
  )
}

export default AppRouter