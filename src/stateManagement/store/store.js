import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../slicers/taskSlice";
import weatherSlice from "../slicers/weatherSlice";
import themeSlice from "../slicers/themeSlice";


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

const persistConfig3 = {
  key: 'theme',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, taskSlice)
const persistedReducer2 = persistReducer(persistConfig2, weatherSlice)
const persistedReducer3 = persistReducer(persistConfig3, themeSlice)

export const store = configureStore({
  reducer: {tasks:persistedReducer, city:persistedReducer2, theme:persistedReducer3},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
