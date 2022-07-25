import React, { useEffect, useState } from 'react';
import { Input, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { searchGiphy, searchTrendingGiphy } from '../api/giphy';
import useFavorites from '../hooks/useFavorites';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  //TODO: add logic to display a heart icon if the gif is in the favorites list
  const { favorites, setFavorites } = useFavorites();

  useEffect(() => {
    searchTrendingGifs();
  }, []);

  const searchTrendingGifs = async () => {
    const trendingGifs = await searchTrendingGiphy();
    setGifs(trendingGifs);
  }

  const handleSearch = async () => {
    const result = await searchGiphy(searchTerm);
    setGifs(result);
  }

  return (
    <>
      <div>
        <h1>Giphy Browser</h1>
        <Input placeholder='Search for a gif' onChange={e => setSearchTerm(e.target.value)}/>
        <Button variant="contained" onClick={handleSearch}>Search</Button>
        <Button variant="text">
          <Link to="/my-saved-gifs">My Saved Gifs</Link>
        </Button>
      </div>
      <div>
        {gifs.map(gif => ( <img src={gif.images.downsized_large.url} alt={gif.title} /> ))}
      </div>
    </>
  );
}

export default HomePage;
