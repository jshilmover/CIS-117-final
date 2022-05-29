import { createSlice } from "@reduxjs/toolkit";

//uses immer library for immutability
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCount = (state) => state.counter.value;
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
