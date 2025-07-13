import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "iscroll",
  initialState: {},
  reducers: {
    cacheVideos: (state, action) => {
      // state.allVideos.push(action.payload);
      // return { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheVideos } = scrollSlice.actions;
export default scrollSlice.reducer;
