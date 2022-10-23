import { createSlice } from '@reduxjs/toolkit'

export const heroSlice = createSlice({
  name: 'heroes',
  initialState:{
    result: [],
    resultByScroll: [],
    loading: false,
    heroSelected: {}
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload
    },
    setAll: (state, action) => {
      state.result = action.payload
    },
    setByScroll: (state) => {
      state.resultByScroll = state.resultByScroll.concat(state.result.slice(state.resultByScroll.length,state.resultByScroll.length+10))
    }
  },
})

export const { setAll, loading, setByScroll } = heroSlice.actions