import axios from 'axios';

export const searchGiphy = async (searchTerm, limit=10) => {
  try {
    const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}`, {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        limit,
      }
    });

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
