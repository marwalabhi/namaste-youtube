import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";
import scrollReducer from "./slices/scrollSlice";
import feedsReducer from "./slices/feedSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
    iscroll: scrollReducer,
    feeds: feedsReducer,
  },
});

export default store;
