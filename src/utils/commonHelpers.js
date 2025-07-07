// format views and likes
export const formatViews = (views) => {
  if (!views) return "";
  const num = Number(views);

  if (num < 1000) return `${num} `;
  // if (num < 100000)
  //   return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K views`;
  // if (num < 10000000)
  //   return `${(num / 100000).toFixed(1).replace(/\.0$/, "")} lakh views`;
  // return `${(num / 10000000).toFixed(1).replace(/\.0$/, "")} crore views`;
  if (num < 1_000_000)
    return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K `;
  if (num < 1_000_000_000)
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M `;
  return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B `;
};

export const formatCount = (count, views = false) => {
  if (!count) return "";
  const num = Number(count);

  if (num < 1000) return `${num}`;
  if (num < 1_000_000)
    return views
      ? `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K views`
      : `${Math.round(num / 1000)}K `;
  if (num < 1_000_000_000)
    return views
      ? `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M views`
      : `${Math.round(num / 1_000_000)}M `;
  return views
    ? `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B views`
    : `${Math.round(num / 1_000_000_000)}B `;
};

export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

export const formatDuration = (duration) => {
  // Example: PT3M59S -> 3:59
  if (!duration) return "";
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const h = match[1] ? match[1].replace("H", "") : "";
  const m = match[2] ? match[2].replace("M", "") : "0";
  const s = match[3] ? match[3].replace("S", "") : "00";
  return h
    ? `${h}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`
    : `${m}:${s.padStart(2, "0")}`;
};
