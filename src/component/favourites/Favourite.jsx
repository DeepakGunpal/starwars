import { Button, IconButton } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Favourite.css';

const Favourite = () => {
    const navigate = useNavigate();
    const items = localStorage.getItem('favChar') !== null ? JSON.parse(localStorage.getItem('favChar')) : []
    console.log('favItems', items)

    const charDetails = (id) => {
        navigate(`/details/${id}`);
    }

    function handleFav(list) {

    }

    function clearList() {
        localStorage.clear();
        navigate('/favourites');
    }

    console.log("charData", items)
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
                                    onClick={() => handleFav(list)}
                                >
                                    <FavoriteIcon />
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