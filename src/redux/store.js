import { configureStore } from "@reduxjs/toolkit";
import pilotsReducer from "./pilotsSlice";

export default configureStore({
  reducer: {
    pilots: pilotsReducer,
  },
});
