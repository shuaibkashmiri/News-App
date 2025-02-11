import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice"; // Ensure correct path if needed

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
