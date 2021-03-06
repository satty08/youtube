import { Avatar } from '@material-ui/core';
import React from 'react'
import './Video.css';
 
const videoURL = "https://www.youtube.com/watch?v="

function Video({title, image, channelImage, channel, views, timestamp, videoId}) {
    return (
        <div className="video">
            <a href={videoURL+videoId}>
            <img className="video__thumbnail" src={image} alt=""/>
            </a>
            <div className="video__info">
                <Avatar className="video__Avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} · {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
