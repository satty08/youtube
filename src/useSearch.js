import { useState, useEffect } from 'react';
import axios from 'axios'

const useSearch = (term) => {

    const[data, setData] = useState(null)

    useEffect(() => {

        async function fetchData() {
            
            const search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&key=AIzaSyBPlzrRv559Sh5UO-l5Z05KdYz8O6ZzX_g`)
            setData(search)
            
        }


        fetchData()

    },[term])

    return { data };
}

export default useSearch;