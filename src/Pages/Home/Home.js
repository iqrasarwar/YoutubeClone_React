import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Videos from "../../components/Videos/Videos";
import { authenticate, loadClient, mostPopularVideos } from "../../api/youtube";
import { gapi } from "gapi-script";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({
          client_id: process.env.REACT_APP_YOUTUBE_CLIENT_API,
        })
        .then(() => {
          authenticate().then(() => {
            loadClient().then(() => {
              mostPopularVideos().then((response) => {
                setVideos(response.result.items);
              });
            });
          });
        });
    });
  }, []);

  return (
    <div className={`${styles.navBar}`}>
      <Layout setVideos={setVideos} />
      {videos === null ? (
        <Loader />
      ) : (
        <div
          className={`${styles.positionBody} ${styles.videoBody}`}
          id="returnedVideos"
        >
          <Videos videoList={videos} />
        </div>
      )}
    </div>
  );
};

export default Home;
