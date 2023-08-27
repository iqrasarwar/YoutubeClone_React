import React from "react";
import styles from "./VideoStats.module.css";

const VideoStats = ({ count, time }) => {
  const viewsCount = formatViewsCount(count);
  const timeAgo = calculateTimeAgo(time);

  return (
    <p>
      {viewsCount} views
      <span className={styles.dot}>.</span>
      {timeAgo}
    </p>
  );
};

const formatViewsCount = (viewsCount) => {
  if (viewsCount >= 1000000) {
    return `${(viewsCount / 1000000).toFixed(1)}M`;
  } else if (viewsCount >= 1000) {
    return `${(viewsCount / 1000).toFixed(1)}K`;
  } else {
    return viewsCount;
  }
};

const calculateTimeAgo = (uploadTime) => {
  const currentTime = new Date();
  const parsedUploadTime = new Date(uploadTime);
  const timeDifference = Math.floor((currentTime - parsedUploadTime) / 1000);

  if (timeDifference < 60) {
    return `${timeDifference} sec ago`;
  } else if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} min ago`;
  } else if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)} hours ago`;
  } else {
    return `${Math.floor(timeDifference / 86400)} days ago`;
  }
};

export default VideoStats;
