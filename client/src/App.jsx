import { useState } from 'react'
import AppRouter from './Router/AppRouter'

import FacturasProvider from './Context/FacturasContext'
import AuthProvider from './Context/AuthContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <FacturasProvider>
          <AppRouter />
        </FacturasProvider>
      </AuthProvider>
    </Provider>
  );
}

