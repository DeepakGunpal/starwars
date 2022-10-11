import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BasicPagination from '../component/pagination/Pagination';
import './Screen1.css';

const Screen1 = () => {

    const [char, setChar] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    let navigate = useNavigate();

    const charFunction = async () => {
        const charData = await axios.get(`https://akabab.github.io/starwars-api/api/all.json`);
        console.log(charData.data);
        setChar(charData.data);
    }

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = char.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(char.length / recordsPerPage)

    useEffect(() => {
        charFunction();
    }, []);

    const charDetails = (id) => {
        navigate(`/details/${id}`);
    }

    return (
        <div className='main_container'>
            <h1 >Star Wars</h1>
            <BasicPagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}

            />
            <div className='characters_container'>
                {
                    currentRecords && currentRecords.map(list => (
                        <div onClick={() => charDetails(list.id)} className='char_container'>
                            <img src={list.image} alt={list.name} className='image' />
                            <h2 >{list.name}</h2>
                        </div>
                    ))
                }
            </div >

        </div>
    )
}

export default Screen1