import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.item = [...state.item, action.payload];
    },
    removeFromCart: (state, action) => {
      let newArr = state.item.filter(
        (item, index) => item.id !== action.payload
      );
      state.item = [...newArr];
    },
    emptyCart: (state) => {
      state.item = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = counterSlice.actions;

export default counterSlice.reducer;
