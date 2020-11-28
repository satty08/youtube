import React, { useState, useEffect } from 'react';
import './Search.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import { useStateValue } from './StateProvider';
import axios from 'axios';
// import useSearch from './useSearch';


function Search() {

    const [{term}, dispatch] = useStateValue();

    const [search, setSearch] = useState([])

    

    useEffect(() => {
        const setData = async () => {
            const search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${term}&maxResults=15&part=snippet&key=AIzaSyBPlzrRv559Sh5UO-l5Z05KdYz8O6ZzX_g`)
            setSearch(search.data.items)
            return search
        }

        setData();
    }, [])

    console.log(search);

    return (
        <div className="search">
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image={search[0].snippet.thumbnails.high.url}
                channel={search[0].snippet.channelTitle}
                verified
                subs="660k"
                noOfVideos={382}
                description={search[0].snippet.description}
            />
            <hr/>

            {search.map(s => (
                    <VideoRow 
                        image={s.snippet.thumbnails.high.url}
                        channel={s.snippet.channelTitle}
                        verified
                        timestamp={s.snippet.publishTime}
                        description={s.snippet.description}
                        subs="660k"
                        noOfVideos={382}
                    />
            ))
            }

            </div>
    )
}

export default Search
