import React from 'react';
import './Search.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

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
                Channel="Maths Classes"
                verified
                subs="660k"
                noOfVideos={382}
                description="The best mathematics lecture"
            />
        </div>
    )
}

export default Search
