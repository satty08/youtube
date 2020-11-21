import React, { useState, useEffect } from 'react';
import './RecommendedVideo.css'
import Video from './Video';
import axios from 'axios';

function RecommendedVideos() {

    const [videos, setVideos] = useState('')

    const [title, setTitle] = useState('')
    const [channel, setChannel] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {

        async function fetchData() {
            
            const youtube = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=AIzaSyBPlzrRv559Sh5UO-l5Z05KdYz8O6ZzX_g")
            setVideos(youtube.data.items)
            setTitle(youtube.data.items[0].snippet.title)
            setChannel(youtube.data.items[0].snippet.channelTitle)
            setThumbnail(youtube.data.items[0].snippet.thumbnails.high.url)
            setTime(youtube.data.items[0].snippet.publishedAt)

            return youtube
        }


         fetchData()

    },[])

    console.log(videos);

    return (
        <div className="recommendedVideo">
            <h1>RecommendedVideos</h1>
            <div className="recommendedVideo__videos">
                {/* {videos.map(video => (
                    <Video
                        title={video.snippet.title}
                        timestamp={video.snippet.publishedAt}
                        views="2.3M"
                        channel={video.snippet.channelTitle}
                        image={video.snippet.thumbnails.high.url}
                        channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69" 
                    />
                ))} */}
                <Video 
                    title={title}
                    views="2.3M views"
                    timestamp={time}
                    channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                    channel={channel}
                    image={thumbnail}
                />
                <Video 
                    title="Become a web developer"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                    channel="React for Developers"
                    image="https://websitesetup.org/wp-content/uploads/2019/10/become-a-web-developer-1024x555.jpg"
                />
                <Video 
                    title="Become a web developer"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                    channel="React for Developers"
                    image="https://websitesetup.org/wp-content/uploads/2019/10/become-a-web-developer-1024x555.jpg"
                />
                <Video 
                    title="Become a web developer"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                    channel="React for Developers"
                    image="https://websitesetup.org/wp-content/uploads/2019/10/become-a-web-developer-1024x555.jpg"
                />
                <Video 
                    title="Become a web developer"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_ohc=l_9qb2vngDsAX9kCuZB&_nc_tp=25&oh=2a7f1c9e2fdd8678515837394da8a4b1&oe=5FD70A69"
                    channel="React for Developers"
                    image="https://websitesetup.org/wp-content/uploads/2019/10/become-a-web-developer-1024x555.jpg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
