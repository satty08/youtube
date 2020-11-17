import React from 'react';
import './Search.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function Search() {
    return (
        <div className="search">
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
            />
            <hr/>
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
            <VideoRow 
                image="https://5.imimg.com/data5/CT/NF/GLADMIN-30040665/vedic-math-classes-500x500.png"
                channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
                timestamp="59 seconds ago"
            />
        </div>
    )
}

export default Search
