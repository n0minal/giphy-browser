import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MySavedGifsPage from './pages/MySavedGifsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/my-saved-gifs" element={<MySavedGifsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
