import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accountSlice";
import outcomesReducer from "./outcomesSlice";
import paymentTagReducer from "./paymentTagSlice";
import paymentMethodReducer from "./paymentMethodSlice";
import currenciesDataReducer from "./currenciesData";

export default configureStore({
  reducer: {
    despesa: outcomesReducer,
    account: accountsReducer,
    paymentTag: paymentTagReducer,
    paymentMethod: paymentMethodReducer,
    currency: currenciesDataReducer,
  },
});
