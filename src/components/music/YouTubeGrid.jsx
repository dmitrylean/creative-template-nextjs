import React from "react";
// import ReactPlayer from "react-player";
import "./YouTubeGrid.css";

export default function YouTubeGrid() {
  const videos = ["#", "#"];

  return (
    <div className="grid-container">
      {videos.map((url, i) => (
        <div key={i} className="video-wrapper">
          {/* <ReactPlayer url={url} width="100%" height="100%" controls /> */}
        </div>
      ))}
    </div>
  );
}
