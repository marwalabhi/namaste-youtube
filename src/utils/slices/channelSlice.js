import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channels: {},
  },
  reducers: {
    addChannelData: (state, action) => {
      const { channelId, data } = action.payload;
      state.channels[channelId] = data;
    },
  },
});

export const { addChannelData } = channelSlice.actions;
export default channelSlice.reducer;
