import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Category, Product } from '../../interfaces/category'

interface Categoriastate {
  category: Category[]
  selectedCategory: Category
}

const initialState: Categoriastate = {
  category: [],
  selectedCategory: { id: null, name: '', icon: '', products: [] as Product[] }
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fillCategory: (state, action) => {
      state.category = action.payload
    },
    clickCategory: (state, action) => {
      const category = state.category.filter(
        (category) => category.id === action.payload
      )
      state.selectedCategory = category[0]
    }
  }
})
export const { fillCategory, clickCategory } = categorySlice.actions
export default categorySlice.reducer

export const getCategory = () => (dispatch: any) => {
  axios
    .get('/api/categorys')
    .then((res) => dispatch(fillCategory(res.data)))
    .catch((err) => console.log(err))
}
