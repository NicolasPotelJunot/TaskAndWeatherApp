import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../slicers/taskSlice";
import weatherSlice from "../slicers/weatherSlice";
import formSlice from "../slicers/formSlice";
import captureId from "../slicers/idSlice";


// persist
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'tasks',
  version: 1,
  storage,
}

const persistConfig2 = {
  key: 'name',
  version: 1,
  storage,
}

const persistConfig4 = {
  key: 'form',
  version: 1,
  storage,
}

const persistConfig5 = {
  key: 'id',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, taskSlice)
const persistedReducer2 = persistReducer(persistConfig2, weatherSlice)
const persistedReducer4 = persistReducer(persistConfig4, formSlice)
const persistedReducer5 = persistReducer(persistConfig5, captureId)

export const store = configureStore({
  reducer: {tasks:persistedReducer, city:persistedReducer2, form:persistedReducer4, id:persistedReducer5},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
