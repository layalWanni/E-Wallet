import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "paymentMethodReducer",
  initialState: {
    methods: [
      {
        value: 1,
        label: "Dinheiro",
      },
      {
        value: 2,
        label: "Cartão de Débito",
      },
      {
        value: 3,
        label: "Cartão de Crédito",
      },
    ],
  },
  reducers: {
    changeMethod(state, { payload }) {
      return { ...state, methods: payload };
    },
  },
});
export const { changeMethod } = slice.actions;
export const returnAllPaymentMethods = state => state.paymentMethod.methods;
export default slice.reducer;
