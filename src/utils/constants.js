export const YT_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  import.meta.env.VITE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// "https://youtube.googleapis.com/youtube/v3/search?&q=";

export const YT_CHANNEL_DETAIL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const VIDEO_CONTENT_DETAIL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=";

export const YT_VIDEO_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const YT_SEARCH = "https://youtube.googleapis.com/youtube/v3/search?&q=";
