import React from "react";
import VideoMeta from "../VideoMeta/VideoMeta";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ video }) => {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        className={styles.iframe}
        height="720"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
      ></iframe>
      {video !== null && <VideoMeta video={video} />}
    </>
  );
};

export default VideoPlayer;
