import React from 'react';

function VideoDetails({ video, loading }) {
	if (!video)
	{
		return "loading...";
	}
	let videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
			<div>
				<iframe width="100%" height="500" src={videoUrl} frameBorder="0" allow="accelerometer;auto;encrypted-media;gyroscope;picture-in-picture"
					allowFullScreen="true"/>
				<h1>{video.snippet.title}</h1>
				<p>{video.snippet.description}</p>	
				
       </div>
    )
}

export default VideoDetails
