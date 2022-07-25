import axios from 'axios';

export const searchGiphy = async (searchTerm, offset = 0, limit = 100) => {
  try {
    const { data: response } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}`, {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        offset,
        limit
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const searchTrendingGiphy = async (offset = 0, limit = 100) => {
  try {
    const { data: response } = await axios.get(`https://api.giphy.com/v1/gifs/trending`, {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        offset,
        limit,
        rating: 'g'
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
