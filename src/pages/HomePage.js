import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchGiphy, searchTrendingGiphy } from '../api/giphy';
import useFavorites from '../hooks/useFavorites';
import GiphyCard from '../components/GiphyCard';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const { favorites, setFavorites } = useFavorites();

  useEffect(() => {
    searchTrendingGifs();
  }, []);

  const searchTrendingGifs = async () => {
    const trendingGifs = await searchTrendingGiphy();
    setGifs(trendingGifs);
    console.log(trendingGifs);
  }

  const handleSearch = async () => {
    const result = await searchGiphy(searchTerm);
    setGifs(result);
  }

  const toggleFavorite = (gif) => {
    if (isFavorite(gif)) {
      setFavorites(state => state.filter(favorite => gif.id !== favorite.id));
    } else {
      console.log(`Adding gif ${gif.id} to favorites`);
      setFavorites(state => [...state, gif]);
    }
  }

  const isFavorite = (gif) => {
    return favorites.find(favorite => favorite.id === gif.id);
  }

  return (
    <>
      <div className="header">
        <h1 className="logo">Giphy Browser</h1>
        <input placeholder='Search for a gif' onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
        <button variant="text">
          <Link to="/my-saved-gifs">My Saved Gifs</Link>
        </button>
      </div>
      <div className="body">
        { gifs.map(gif => (<GiphyCard isFavorite={isFavorite(gif)} gif={gif} key={gif.id} toggleFavorite={toggleFavorite}/>)) }
      </div>
    </>
  );
}

export default HomePage;
