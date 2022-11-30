import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "currenciesData",
  initialState: {
    currencies: {},
  },
  reducers: {
    changeCurrencies(state, { payload }) {
      return { ...state, currencies: payload };
    }
  },
});
export const { changeCurrencies } = slice.actions;
export const returnAllCurrenties = state => state.currency.currencies;
export default slice.reducer;
