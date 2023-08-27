import React from "react";
import styles from "./VideoReactions.module.css";

const VideoReactions = ({ likeCount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.videoActions}>
        <span className={styles.action}>
          <img src="../static/images/like.png" alt="like" />
          <span className={styles.count}>{likeCount}</span>
        </span>
        <span className={styles.action}>
          <img src="../static/images/dislike.png" alt="dislike" />
          <span className={styles.count}>DisLike</span>
        </span>
        <span className={styles.action}>
          <img src="../static/images/share.png" alt="share" />
          <span className={styles.count}>Share</span>
        </span>
        <span className={styles.action}>
          <img src="../static/images/save.png" alt="save" />
          <span className={styles.count}>Save</span>
        </span>
      </div>
      <button className={styles["subscribe_btn"]}>Subscribe</button>
    </div>
  );
};

export default VideoReactions;
