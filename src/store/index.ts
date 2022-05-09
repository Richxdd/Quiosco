import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './slices/categoryslice'
import modalReducer from './slices/modalslice'
import orderReducer from './slices/orderslice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalReducer,
    orders: orderReducer
  }
})

export type Appdispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
