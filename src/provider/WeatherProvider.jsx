import { WeatherContext } from "../context";
import useWeatherHooks from "../hooks/useWeatherHooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeatherHooks();
  <WeatherContext.Provider value={{ weatherData, error, loading }}>
    {children}
  </WeatherContext.Provider>;
};

export default WeatherProvider;
