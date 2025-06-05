import { productApi } from "@/features/prodcut/productApiFetch";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
const createStores = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
};

export default createStores;
