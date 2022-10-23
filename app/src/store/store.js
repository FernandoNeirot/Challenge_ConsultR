import { configureStore } from '@reduxjs/toolkit'
import { heroSlice } from './slices/heroes'

export const store = configureStore({
  reducer: {
    heroes: heroSlice.reducer
  },
})