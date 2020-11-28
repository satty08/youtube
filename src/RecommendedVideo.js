import React, { useState, useEffect } from 'react';
import './RecommendedVideo.css'
import Video from './Video';
import axios from 'axios';
import instance from './axios';


function RecommendedVideos() {

    const [videos, setVideos] = useState([])

    useEffect(() => {

        async function fetchData() {
            
            const youtube = await axios.get(instance)
            setVideos(youtube.data.items)
            return youtube
        }


         fetchData()

    },[])

    return (
        <div className="recommendedVideo">
            <h1>RecommendedVideos</h1>
            <div className="recommendedVideo__videos">
                {videos.map(video => (
                    <Video
                        title={video.snippet.title}
                        timestamp={video.snippet.publishedAt}
                        videoId={video.id.videoId}
                        views="2.3M"
                        channel={video.snippet.channelTitle}
                        image={video.snippet.thumbnails.high.url}
                        channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69" 
                    />
                ))}
                </div>
        </div>
    )
}

export default RecommendedVideos
