import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const scrollSlice = createSlice({
  name: "iscroll",
  initialState: {
    videos: [],
  },
  reducers: {
    appendVideos: (state, action) => {
      // state.allVideos.push(action.payload);
      // return { ...action.payload, ...state };
      // state = Object.assign(state, action.payload);

      state.videos.push(...action.payload);
    },
    resetVideos: (state, action) => {
      state.videos = [];
    },
  },
});

export const { appendVideos, resetVideos } = scrollSlice.actions;
export default scrollSlice.reducer;
