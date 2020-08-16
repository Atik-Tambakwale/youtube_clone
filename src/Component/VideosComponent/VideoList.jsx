import React from 'react';
import VideoItem from "./VideoItem";

function VideoList({videos, onSelectedVideo}) {
	console.log(videos);
	if (!videos)
	{
		return 'loading.....'
		}
    const renderVideos = videos.map(video => {
        return (
            <VideoItem video={video}
                key={
                    video.id.videoId
                }
                onSelectedVideo={onSelectedVideo}/>
        );
    });
    return (
        <div> {renderVideos} </div>
    )
}

export default VideoList
