import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import './Favourite.css';

const Favourite = () => {
    const navigate = useNavigate();
    let getLocalItems = localStorage.getItem('favChar') !== null ? JSON.parse(localStorage.getItem('favChar')) : []
    const [items, setItems] = useState(getLocalItems)

    const charDetails = (id) => {
        navigate(`/details/${id}`);
    }

    function deletePeople(deletedId) {
        const updatedPeople = items.filter(item => {
            return deletedId !== item.id;
        });
        setItems(updatedPeople);
        localStorage.setItem('favChar', JSON.stringify(updatedPeople));
    }

    function clearList() {
        localStorage.removeItem('favChar');
        setItems([]);
    }

    return (
        <div className='fav_main_container'>

            <div className='clear_favlist_button'>
                <Button style={{
                    color: 'white',
                    backgroundColor: 'red', fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                    variant="contained"
                    onClick={clearList}
                >Clear Favourite list</Button>
                <Link to='/' ><h1 >Star Wars</h1></Link>
            </div>
            <div className='fav_container'>
                <h1>Favourite <br /> Characters </h1>
                {
                    items && items.map(list => (
                        <div className='fav_char_container' key={list.id}>

                            <div onClick={() => charDetails(list.id)} className='image_container'>
                                <img src={list.image} alt={list.name} className='image' />
                                <h2 >{list.name}</h2>
                            </div>
                            <abbr title='Mark as favourite'>
                                <IconButton
                                    className='fav_button'
                                    aria-label="saved"
                                    onClick={() => deletePeople(list.id)}
                                >
                                    <DeleteIcon style={{ color: 'white' }} />
                                </IconButton>
                            </abbr>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favourite