import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // {"ip": ["iphone", "iphone11", "iphone16"]}
      // console.log(state);

      // state = { ...action.payload, ...state };
      // console.log(current(state));
      state = Object.assign(state, action.payload);

      // RTK- either Mutate the existing state or return a new State

      // return { ...action.payload, ...state };
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
