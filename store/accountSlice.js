import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "accountReducer",
  initialState: {
    accounts: [
      {
        email: "billgates@gmail.com",
        password: "#FuckApple666",
      },
      {
        email: "adalovelace@gmail.com",
        password: "!DigdimDigdim!2",
      },
      {
        email: "markzuckerberg@gmail.com",
        password: "#PegueiSeusDados123",
      },
      {
        email: "teste@gmail.com",
        password: "!Teste123",
      },
    ],
  },
  reducers: {
    changeAccount(state, { payload }) {
      return { ...state, accounts: payload };
    },
    createAccount(state, { payload }) {
      return { ...state, accounts: [...state.accounts, payload] };
    },
  },
});
export const { changeAccount, createAccount } = slice.actions;
export const returnAllAccounts = (state) => state.account.accounts;
export default slice.reducer;
