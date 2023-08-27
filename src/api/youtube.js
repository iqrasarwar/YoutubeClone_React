import { gapi } from "gapi-script";

export const authenticate = () => {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
    .then(
      () => {
        console.log("Sign-in successful");
      },
      (err) => {
        console.error("Error signing in", err);
      }
    );
};

export const loadClient = () => {
  return new Promise((resolve) => {
    gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_DATA_API);
    gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.error("Error loading GAPI client for API", err);
      });
  });
};

export const mostPopularVideos = () => {
  return gapi.client.youtube.videos.list({
    part: ["snippet,statistics"],
    chart: "mostPopular",
    regionCode: "PK",
    safeSearch: "strict",
    maxResults: 60,
  });
};

export const executeSearch = (query, setVideos) => {
  gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 50,
      safeSearch: "strict",
      q: query,
    })
    .then((response) => {
      setVideos(response.result.items);
    })
    .catch((err) => {
      console.error("Execute error", err);
    });
};

export const loadById = (id, setVideo) => {
  return gapi.client.youtube.videos
    .list({
      part: ["snippet,contentDetails,statistics"],
      id: id,
    })
    .then(
      (response) => {
        setVideo(response.result.items[0]);
      },
      (err) => {
        console.error("Execute error", err);
      }
    );
};
