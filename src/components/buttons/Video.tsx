import { useState } from "react";

import type Props from '../../types/Prefix'


export default function VideoButtons({ prefix = "/" }: Props) {
    const [musicRun, setMusicRun] = useState(false);
    const [videoRun, setVideoRun] = useState(true);
    
    const updatePlayingMusic = () => {
        setMusicRun((prev) => !prev);

        // so, this is fucking DOM, because i stupid teen...
        const video = document.querySelector("video"); 
        if (video) {
            video.muted = !video.muted; 
        }
    };
    
    const updateVideoPlaying = () => {
        setVideoRun((prev) => !prev);

        const video = document.querySelector("video"); 
        if (video) {
            videoRun ? video.pause() : video.play(); 
        }
    };

    return (
        <>
            <button onClick={updatePlayingMusic} className="music-button">
                <img
                    src={musicRun ? `${prefix}svg/volume-off.svg` : `${prefix}svg/volume.svg`}
                    alt="volume"
                    width="25"
                    height="25"
                />
            </button>
            <button onClick={updateVideoPlaying} className="music-button">
                <img
                    src={videoRun ? `${prefix}svg/pause.svg` : `${prefix}svg/play.svg`}
                    alt="pause"
                    width="25"
                    height="25"
                />
        </button>
    </>
    );
}