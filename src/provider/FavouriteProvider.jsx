import { FavouriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavouriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavorite = (location) => {
    const restFavorite = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorite);
  };
  return (
    <>
      <FavouriteContext.Provider
        value={{ addToFavorite, removeFromFavorite, favorites }}
      >
        {children}
      </FavouriteContext.Provider>
    </>
  );
}
