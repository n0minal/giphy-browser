import React, { useEffect, useState } from 'react';
import { searchGiphy, searchTrendingGiphy } from '../../api/giphy';
import useFavorites from '../../hooks/useFavorites';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { ContentContainer } from './styles';
import SearchBox from '../../components/SearchBox';
import NavLink from '../../components/NavLink';

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
  }

  const handleSearch = async () => {
    if (searchTerm) {
      const result = await searchGiphy(searchTerm);
      setGifs(result);
    } else {
      searchTrendingGifs();
    }
  }

  const handleSearchChange = async (value) => {
    setSearchTerm(value);
  }

  const toggleFavorite = (gif) => {
    if (isFavorite(gif)) {
      setFavorites(state => state.filter(favorite => gif.id !== favorite.id));
    } else {
      setFavorites(state => [...state, gif]);
    }
  }

  const isFavorite = (gif) => {
    return favorites.find(favorite => favorite.id === gif.id);
  }

  return (
    <>
      <Header>
        <SearchBox handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
        <NavLink to="/my-saved-gifs">My Saved Gifs</NavLink>
      </Header>
      <ContentContainer>
        { gifs.map(gif => (<Card isFavorite={isFavorite(gif)} gif={gif} key={gif.id} toggleFavorite={toggleFavorite}/>)) }
      </ContentContainer>
    </>
  );
}

export default HomePage;
