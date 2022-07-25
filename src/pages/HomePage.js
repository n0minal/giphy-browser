import React from 'react';
import { Input, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { searchGiphy } from '../api/giphy';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = async () => {
    const result = await searchGiphy(searchTerm, 10);
    console.log(result);
  }

  return (
    <div>
      <h1>Giphy Browser</h1>
      <Input placeholder='Search for a gif' onChange={e => setSearchTerm(e.target.value)}/>
      <Button variant="contained" onClick={handleSearch}>Search</Button>
      <Button variant="text">
        <Link to="/my-saved-gifs">My Saved Gifs</Link>
      </Button>
    </div>
  );
}

export default HomePage;
