import AppRoutes from './routes/AppRoutes.jsx'
import './styles/index.css'
import "./styles/generalStyles.css"
import 'animate.css';
// redux
import { store } from './stateManagement/store/store'
import { Provider } from 'react-redux'
// persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export const App = () =>{
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  )
}

