import React from "react";
import styles from "./VideoTitle.module.css";

const VideoTitle = ({ title }) => {
  return <h6 className={styles["video-title"]}>{title}</h6>;
};

export default VideoTitle;
