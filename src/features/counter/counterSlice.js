import { createSlice } from "@reduxjs/toolkit";

const counterReducerSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    inc: function (state, action) {
      state.value += action.payload;
    },
    dec: function (state, action) {
      state.value -= 1;
    },
  },
});

export const { inc, dec } = counterReducerSlice.actions;

export default counterReducerSlice.reducer;
