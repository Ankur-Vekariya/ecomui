import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/slice/counterSlice";
import cartReducer from "@/redux/slice/cartSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
