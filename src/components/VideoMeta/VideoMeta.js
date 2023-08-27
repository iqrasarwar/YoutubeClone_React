import VideoReactions from "../VideoReactions/VideoReactions";
import ChannelMeta from "../ChannelMeta/ChannelMeta";
import VideoTitle from "../VideoTitle/VideoTitle";
import styles from "./VideoMeta.module.css";
import React from "react";

const VideoMeta = ({ video }) => {
  const {
    snippet: { title, publishedAt, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <div className={styles.container}>
      <div className={styles["video_Details"]}>
        <div>
          <VideoTitle title={title} />
          <ChannelMeta
            img={thumbnails.medium.url}
            viewsCount={viewCount}
            uploadedAt={publishedAt}
            channelName={channelTitle}
          />
        </div>
        <div>
          <VideoReactions likeCount={likeCount} />
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
