import useWeatherHooks from "../../hooks/useWeatherHooks";
import Add_To_Favourite from "./Add_To_Favourite";
import Weather_Condition from "./Weather_Condition";
import Weather_Headline from "./Weather_Headline";

export default function WeatherBoard() {
  const { loading, error, weatherData } = useWeatherHooks();
  console.log(loading, error, weatherData);
  return (
    <>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            <Add_To_Favourite />
            <Weather_Headline />
            <Weather_Condition />
          </div>
        </div>
      </div>
    </>
  );
}
