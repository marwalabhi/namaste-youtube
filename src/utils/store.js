import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";
import scrollReducer from "./slices/scrollSlice";
import feedsReducer from "./slices/feedSlice";
import channelReducer from "./slices/channelSlice";
import { youtubeChannelApi } from "../services/youtubeChannelApi";

const store = configureStore({
  reducer: {
    [youtubeChannelApi.reducerPath]: youtubeChannelApi.reducer,
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
    iscroll: scrollReducer,
    feeds: feedsReducer,
    channel: channelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeChannelApi.middleware),
});

export default store;
