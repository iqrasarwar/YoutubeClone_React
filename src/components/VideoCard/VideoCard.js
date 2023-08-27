import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import VideoTitle from "../VideoTitle/VideoTitle";
import ChannelMeta from "../ChannelMeta/ChannelMeta";

const VideoCard = ({ video }) => {
  let { id, snippet, statistics } = video;
  if (typeof id === "object" && id.hasOwnProperty("videoId")) {
    id = id.videoId;
  }
  const title = snippet.title;
  const name = snippet.channelTitle;
  const viewsCount = statistics
    ? statistics.viewCount
    : Math.floor(Math.random() * 100000);
  const uploadedAt = snippet.publishedAt;
  const thumbnail = snippet.thumbnails.medium.url;

  return (
    <Link to={{ pathname: `/Video/${id}` }} className="removeLink">
      <div className={`card columnCard col-lg-3 col-md-4 col-sm-6`}>
        <img className="card-img-top" src={thumbnail} alt="Card image cap" />
        <VideoTitle title={title} />
        <ChannelMeta
          img={thumbnail}
          viewsCount={viewsCount}
          uploadedAt={uploadedAt}
          channelName={name}
        />
      </div>
    </Link>
  );
};

export default VideoCard;
