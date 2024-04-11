import { configureStore } from '@reduxjs/toolkit'
import prodacteReducer from "./prodacteSlice"

export const store = configureStore({
  reducer: {
    counter: prodacteReducer,
  },
})