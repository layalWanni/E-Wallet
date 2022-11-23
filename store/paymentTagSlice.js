import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "paymentTagReducer",
  initialState: {
    tags: [
      {
        value: 1,
        label: "Alimentação",
      },
      {
        value: 2,
        label: "Lazer",
      },
      {
        value: 3,
        label: "Trabalho",
      },
      {
        value: 4,
        label: "Transporte",
      },
      {
        value: 5,
        label: "Saúde",
      },
    ],
  },
  reducers: {
    changeTag(state, { payload }) {
      return { ...state, tags: payload };
    },
    createTag(state, { payload }) {
      return { ...state, tags: [...state.tags, payload] };
    },
  },
});
export const { changeTag, createTag } = slice.actions;
export const returnAllTags = state => state.paymentTag.tags;
export default slice.reducer;
