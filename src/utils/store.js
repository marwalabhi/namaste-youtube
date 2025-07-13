import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";
import scrollSlice from "./slices/scrollSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    iscroll: scrollSlice,
  },
});

export default store;
