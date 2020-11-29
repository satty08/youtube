import React, { useState, useEffect } from 'react';
import './Search.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import { useStateValue } from './StateProvider';
import axios from 'axios';


function Search() {

    const [{term}, dispatch] = useStateValue();

    const [searchList, setSearchList] = useState([])

    

    useEffect(() => {
        const setData = async () => {
            const searchTerm = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${term}&maxResults=15&part=snippet&key=AIzaSyBPlzrRv559Sh5UO-l5Z05KdYz8O6ZzX_g`)
            setSearchList(searchTerm.data.items)
            return searchTerm
        }

        setData();
    }, [])

    console.log(searchList);

    return (
        <div className="search">
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            {/* <ChannelRow 
                image={searchList[1].snippet.thumbnails.high.url| ''}
                channel={searchList[1].snippet.channelTitle|''}
                verified
                subs="660k"
                noOfVideos={382}
                description={searchList[1].snippet.description|''}
            /> */}
            <hr/>

            {searchList.map(s => (
                    <VideoRow 
                        image={s.snippet.thumbnails.high.url}
                        title={s.snippet.title}
                        channel={s.snippet.channelTitle}
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
