import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productStatusReducer from "./slices/productStatusSlice";

const store = configureStore({
  reducer: {
    product: productStatusReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
