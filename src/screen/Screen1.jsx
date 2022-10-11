import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BasicPagination from '../component/pagination/Pagination';

const Screen1 = () => {

    const [char, setChar] = useState([]);
    let navigate = useNavigate();

    const charFunction = async () => {
        const charData = await axios.get(`https://akabab.github.io/starwars-api/api/all.json`);
        console.log(charData.data);
        setChar(charData.data);
    }


    useEffect(() => {
        charFunction();
    }, []);

    const charDetails = (id) => {
        navigate(`/details/${id}`);
    }

    return (
        <>
            <BasicPagination />
            <div className='Characters_container'>
                {
                    char && char.map(list => (
                        <div>
                            <img src={list.image} alt={list.name} />
                            <h2 onClick={() => charDetails(list.id)}>{list.name}</h2>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Screen1