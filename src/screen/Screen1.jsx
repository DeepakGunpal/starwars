import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BasicPagination from '../component/pagination/Pagination';

const Screen1 = ({ setCharId }) => {

    const [char, setChar] = useState([]);
    let navigate = useNavigate();

    const charFunction = async () => {
        const charData = await axios.get(`https://swapi.dev/api/people/?page=${1}`);
        console.log(charData.data.results);
        setChar(charData.data.results);
    }

    useEffect(() => {
        charFunction();
    }, []);

    const charDetails = (url) => {
        console.log('working', url)
        url = url.split('/');
        const id = url[url.length - 2];
        setCharId(id);
        navigate(`/details/${id}`);
    }

    return (
        <>
            <BasicPagination />
            <div className='Characters_container'>
                {
                    char && char.map(list => (
                        <div>
                            <h2 onClick={() => charDetails(list.url)}>{list.name}</h2>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Screen1