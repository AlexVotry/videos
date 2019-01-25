import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  console.log(videos);
  const allVideos = videos.map(video =>
    <div key={video.id.videoId}>
      <VideoItem video={video} />
    </div>
  );
  
  return (
    <div className="video-list">
      {allVideos}
    </div>
  );
}

export default VideoList;
