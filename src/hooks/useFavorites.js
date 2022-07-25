import { useContext } from "react";
import { FavoritesContext } from "../providers/favorites";

const useFavorites = () => useContext(FavoritesContext);

export default useFavorites;
