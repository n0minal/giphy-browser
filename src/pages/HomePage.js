import React from 'react';
import { Input, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Input placeholder='Search for a gif' />
      <Button>Search</Button>
      <Button>
        <Link to="/my-saved-gifs">My Saved Gifs</Link>
      </Button>
    </div>
  );
}

export default HomePage;
