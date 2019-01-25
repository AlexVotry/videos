import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const vid = video.snippet;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={vid.thumbnails.medium.url} alt={vid.channelTitle} />
      <div className="content">
        <div className="header">
          {vid.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
