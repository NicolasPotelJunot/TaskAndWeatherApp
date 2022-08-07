import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../slicers/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
})