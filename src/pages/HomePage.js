import React, { useEffect, useState } from 'react';
import { searchGiphy, searchTrendingGiphy } from '../api/giphy';
import useFavorites from '../hooks/useFavorites';
import Card from '../components/Card';
import Header from '../components/Header';

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

  const handleSearchChange = async (value) => {
    setSearchTerm(value);
  }

  const toggleFavorite = (gif) => {
    if (isFavorite(gif)) {
      console.log(`Removing gif ${gif.id} to favorites`);
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
      <Header handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
      <div className="body">
        { gifs.map(gif => (<Card isFavorite={isFavorite(gif)} gif={gif} key={gif.id} toggleFavorite={toggleFavorite}/>)) }
      </div>
    </>
  );
}

export default HomePage;
