import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activation: null,
  },
  reducers: {
    activationMenu: (state) => {
      state.activation !== false ? (state.activation = false) : (state.activation = true);
    },
  },
});

export const { activationMenu } = menuSlice.actions;
export default menuSlice.reducer;
