import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'despesasReducer',
  initialState: {
    despesas: [],
  },
  reducers: {
    changeDespesas(state, { payload }){
      return {...state, despesas: payload}
    },
    createDespesa(state, { payload }){
      return {...state, despesas: [...state.despesas, payload]}
    },
  }
})

export const { changeDespesas, createDespesa } = slice.actions;

export const returnAllDespesas = state => state.despesa.despesas;

export default slice.reducer;