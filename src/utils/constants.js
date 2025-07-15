export const YT_TRENDING_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  import.meta.env.VITE_API_KEY;

export const YT_SEARCH_SUGGEST_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// "https://youtube.googleapis.com/youtube/v3/search?&q=";

export const YT_CHANNEL_DETAIL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const VIDEO_CONTENT_DETAIL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=";

export const YT_VIDEO_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const YT_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=";

export const LIVE_CHAT_COUNT = 225;

export const API_PAGE_SIZE = 50;
