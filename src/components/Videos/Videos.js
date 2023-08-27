import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Videos.module.css";

const Videos = ({ videoList }) => {
  return (
    <div className={`col-12 col-lg-12 ${styles["videos"]}`}>
      {videoList.map((v, index) => (
        <VideoCard key={index} video={v} />
      ))}
    </div>
  );
};

export default Videos;
