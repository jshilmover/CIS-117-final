import { createSlice } from "@reduxjs/toolkit";

//uses immer library for immutability
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const count = (state) => state.counter.value;

export default counterSlice.reducer;
