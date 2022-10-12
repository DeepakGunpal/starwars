import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Screen2.css';

const Screen2 = () => {
    const [people, setPeople] = useState({});
    const [charImg, setCharImg] = useState('');
    const { charId } = useParams();

    const peopleDetails = async (charId) => {
        const data = await axios.get(`https://swapi.dev/api/people/${charId}/`);
        setPeople(data.data);
        const imgData = await axios.get(`https://akabab.github.io/starwars-api/api/id/${charId}.json`);
        setCharImg(imgData.data.image);
    }

    useEffect(() => {
        peopleDetails(charId);
    }, [charId]);

    return (
        <>
            <div className='details_container'>
                <img src={charImg} alt={people.name} className='screen2_image' />
                <div className='details_content'>
                    {
                        people && <div>
                            <h3>Name: {people.name}</h3>
                            <h3>Birth Year: {people.birth_year}</h3>
                            <h3>Gender: {people.gender}</h3>
                            <h3>Height: {people.height}</h3>
                            <h3>Hair Color: {people.hair_color}</h3>
                            <h3>Skin Color: {people.skin_color}</h3>
                            <h3>Eye Color: {people.eye_color}</h3>
                            <h3>Home World: {people.homeworld}</h3>
                        </div>
                    }
                </div>
                <div className='films_container'>
                    <h4>{people.name} Movies</h4>
                    {
                        people.films && people.films.length > 0 && people.films.map(film => (
                            <div>{film}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Screen2