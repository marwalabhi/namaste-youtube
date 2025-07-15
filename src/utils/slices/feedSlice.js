import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const YT_API_URL = "https://www.googleapis.com/youtube/v3/videos";

export const fetchTrending = createAsyncThunk(
  "feeds/fetchTrending",
  async ({ rejectWithValue }, pageToken = "") => {
    try {
      const { data } = await axios.get(YT_API_URL, {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 50,
          pageToken,
          key: import.meta.env.VITE_API_URL,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

const makeInitialFeed = () => ({
  items: [],
  byId: {},
  nextPageToken: null,
  fetched: false,
  status: "idle",
  error: null,
});

const initialState = {
  trending: makeInitialFeed(),
};

const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducer: {
    resetFeed: (state, action) => {
      const feedName = action.payload;
      state[feedName] = makeInitialFeed();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.trending.status = "loading";
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        const feed = state.trending;
        feed.status = "succeeded";
        feed.fetched = true;
        feed.nextPageToken = action.payload.nextPageToken || null;

        action.payload.items.forEach((v) => {
          const id = v.id;
          if (!feed.byId[id]) feed.items.push(id);
          feed.byId[id] = v;
        });
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.trending.status = "failed";
        state.trending.error = action.payload;
      });
  },
});

export const { resetFeed } = feedSlice.actions;
export default feedSlice.reducer;
