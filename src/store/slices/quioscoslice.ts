import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, Product } from '../../interfaces/category'
import { toast } from 'react-toastify'
interface Quioscostate {
  product: Product
  orders: Order[]
  modal: boolean
  name: string
  total: number
}

const initialState: Quioscostate = {
  product: {} as Product,
  orders: [] as Order[],
  modal: false,
  name: '',
  total: 0
}

const quioscoSlice = createSlice({
  name: 'quiosco',
  initialState,
  reducers: {
    fillProduct: (state, action) => {
      state.product = action.payload
    },
    clickModal: (state) => {
      state.modal = !state.modal
    },
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
    },
    editOrder: (state, { payload: id }) => {
      const productUpdate = state.orders.filter((item) => item.id === id)
      state.product = productUpdate[0]
      state.modal = !state.modal
    },
    deleteOrder: (state, { payload: id }) => {
      const productUpdate = state.orders.filter((item) => item.id !== id)
      state.orders = productUpdate
    },
    changeName: (state, { payload: name }) => {
      state.name = name
    },
    changeTotal: (state, { payload: total }) => {
      state.total = total
    }
  }
})
export const {
  fillProduct,
  clickModal,
  addOrder,
  editOrder,
  deleteOrder,
  changeName,
  changeTotal
} = quioscoSlice.actions
export default quioscoSlice.reducer
