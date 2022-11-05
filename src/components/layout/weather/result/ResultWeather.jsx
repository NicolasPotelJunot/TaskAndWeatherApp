import { Spinners } from "../spinner/Spinners";
import { WeatherNextHours } from "./WeatherNextHours";
import { WeatherNow } from "./WeatherNow";

export const ResultWeather = ({ showData, loadingData, weather, forecast }) => {
  
  if (loadingData) {
    return <Spinners />;
  }

  return (
    <div className="animate__animated animate__zoomInDown px-5">
      {showData === true ? (
        <div className="w-full grid gap-1">
          <WeatherNow weatherProps={weather} />

          <WeatherNextHours weather={weather} forecast={forecast} />
        </div>
      ) : (
        <div className="flex justify-center">
          <h2 className="text-dark text-center text-lg cursor-default mx-auto">
            Ingrese el nombre de su ciudad para ver su clima
          </h2>
        </div>
      )}
    </div>
  );
};
