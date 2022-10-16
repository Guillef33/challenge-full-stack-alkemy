import { useState } from 'react'
import AppRouter from './Router/AppRouter'

import FacturasProvider from './Context/FacturasContext'
import AuthProvider from './Context/AuthContext'

export default function App() {

  return (
    <AuthProvider>
      <FacturasProvider>
          <AppRouter />
      </FacturasProvider>
    </AuthProvider>

   
  )
}

