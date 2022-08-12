import React from 'react'
import './index.css'
import 'animate.css';
import AppRoutes from './routes/appRoutes.jsx'
// redux
import { store } from './stateManagement/store/store'
import { Provider } from 'react-redux'
// persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
