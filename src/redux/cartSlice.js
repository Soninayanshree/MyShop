import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)
      if (existing) existing.qty += item.qty || 1
      else state.items.push({ ...item, qty: item.qty || 1 })
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty += 1
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty = Math.max(1, item.qty - 1)
    },
    clearCart: state => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
