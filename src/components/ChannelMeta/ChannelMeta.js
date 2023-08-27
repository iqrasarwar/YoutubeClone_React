import React from "react";
import VideoStats from "../VideoStats/VideoStats";
import Verified from "../../svgs/Verified";
import styles from "./ChannelMeta.module.css";

const ChannelMeta = ({ channelName, img, viewsCount, uploadedAt }) => {
  return (
    <>
      <div className={styles["card-body"]}>
        <img className={styles["channel-pic"]} src={img} />
        <div>
          <div className={styles["verified-channel"]}>
            <p>{channelName}</p>
            <Verified />
          </div>
          <VideoStats count={viewsCount} time={uploadedAt} />
        </div>
      </div>
    </>
  );
};

export default ChannelMeta;
