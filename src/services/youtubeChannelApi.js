import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeChannelApi = createApi({
  reducerPath: "youtubeChannelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    getChannelDetails: builder.query({
      query: (channelId) =>
        `channels?part=snippet&id=${channelId}&key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const { useGetChannelDetailsQuery } = youtubeChannelApi;
