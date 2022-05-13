import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categoryslice'
import quioscoReducer from './slices/quioscoslice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    quiosco: quioscoReducer
  }
})

export type Appdispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
