import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Player = () => {
  
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
  }, [videoId]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ReactPlayer
        url={decodeURIComponent(videoId)}
        width="100%"
        height="100%"
        playing={playing}
        controls={true}
        onEnded={() => setPlaying(false)} // Pause when the video ends
      />
    </div>
  );
};

export default Player;
