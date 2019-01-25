import React from 'react';

const VideoItem = ({ video }) => {
  const vid = video.snippet;
  return (
    <div>
    <h2>{vid.title}</h2>
    <img src={vid.thumbnails.medium.url} alt={vid.channelTitle} />
    </div>
  );
}

export default VideoItem;
