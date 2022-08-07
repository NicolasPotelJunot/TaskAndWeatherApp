import React from 'react'
import './index.css'
import AppRoutes from './routes/appRoutes.jsx'
// redux
import { store } from './stateManagement/store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
