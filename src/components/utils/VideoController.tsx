import React from "react";
import { useEffect } from "react";

interface VideoControllerProps {
  stop: boolean;
}

const VideoController: React.FC<VideoControllerProps> = ({ stop }) => {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      stop ? video.pause() : video.play();
    }
  }, [stop]);

  return null; // this component does not render anything
};

export default VideoController;
