import { useContext, useEffect, useState } from "react";
import ReadHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function Add_To_Favourite() {
  const { addToFavorite, removeFromFavorite, favorites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const { longitude, latitude, location } = weatherData;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, []);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavorite}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
            <img src={isFavorite ? ReadHeartIcon : HeartIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
