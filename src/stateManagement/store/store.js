import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../slicers/taskSlice";

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
const persistedReducer = persistReducer(persistConfig, taskSlice)

export const store = configureStore({
  reducer: {tasks:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
