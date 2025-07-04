import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // {"ip": ["iphone", "iphone11", "iphone16"]}

      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 * searching inside obj: it is even more optimised
 * new Map();
 *
 *
 *
 */
