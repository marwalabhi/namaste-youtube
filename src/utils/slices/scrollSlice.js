import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const scrollSlice = createSlice({
  name: "iscroll",
  initialState: {
    videos: [],
    token: null,
  },
  reducers: {
    appendVideos: (state, action) => {
      // state.allVideos.push(action.payload);
      // return { ...action.payload, ...state };
      // state = Object.assign(state, action.payload);

      state.videos.push(...action.payload);
    },
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    resetVideos: (state, action) => {
      state.videos = [];
    },
  },
});

export const { appendVideos, resetVideos, storeToken } = scrollSlice.actions;
export default scrollSlice.reducer;
