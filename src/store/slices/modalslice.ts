import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product } from '../../interfaces/category'

interface Modalstate {
  product: Product
  modal: boolean
}

const initialState: Modalstate = {
  product: {} as Product,
  modal: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    fillProduct: (state, action) => {
      state.product = action.payload
    },
    clickModal: (state) => {
      state.modal = !state.modal
    }
  }
})
export const { fillProduct, clickModal } = modalSlice.actions
export default modalSlice.reducer
