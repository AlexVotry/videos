import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const allVideos = videos.map(video =>
    <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
  );

  return (
    <div className="ui relaxed divided list">
      {allVideos}
    </div>
  );
}

export default VideoList;
