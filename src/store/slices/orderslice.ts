import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { Order } from '../../interfaces/category'

interface Orderstate {
  orders: Order[]
}

const initialState: Orderstate = {
  orders: [] as Order[]
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      if (state.orders.some((item) => item.id === action.payload.id)) {
        const orderUpdate = state.orders.map((item) =>
          item.id === action.payload.id ? action.payload : item
        )
        state.orders = orderUpdate
        toast.success('Guardado Correctamente')
      } else {
        state.orders = [...state.orders, action.payload]
        toast.success('Agregado al Pedido')
      }
    }
  }
})
export const { addOrder } = orderSlice.actions
export default orderSlice.reducer
