import React, { useState, useEffect } from "react";
import styles from "./Video.module.css";
import { useParams } from "react-router-dom";
import { authenticate, loadClient } from "../../api/youtube";
import { gapi } from "gapi-script";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { loadById } from "../../api/youtube";
import SideBarSection from "../../components/SideBarSection/SideBarSection";
import Loader from "../../components/Loader/Loader";

const Video = () => {
  const [video, setVideo] = useState(null);
  const params = useParams();
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({
          client_id: process.env.REACT_APP_YOUTUBE_CLIENT_API,
        })
        .then(() => {
          authenticate().then(() => {
            loadClient().then(() => {
              loadById(params.url, setVideo);
            });
          });
        });
    });
  }, [params.url]);

  return (
    <div className={`${styles.navBar}`}>
      <SideBarSection />
      <div
        className={`${styles.positionBody} ${styles.videoBody}`}
        id="returnedVideos"
      >
        {video === null ? (
          <Loader />
        ) : (
          <div>
            <div class="video_container">
              <VideoPlayer video={video} />
            </div>
            <div class="comments_Container"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
