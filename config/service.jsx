const axios = require("axios");

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

const getVideos = async (query) => {
  try {
    const params = {
      part: "snippet",
      q: query,
      maxResults: 4,
      type: "video",
      videoEmbeddable: true,
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    };

    const resp = await axios.get(YOUTUBE_BASE_URL + "/search", { params });
    return resp.data.items;
  } catch (error) {
    console.error(
      "YouTube API request failed:",
      error.response ? error.response.data : error.message
    );
    // throw error;
  }
};

export default {
  getVideos,
};
