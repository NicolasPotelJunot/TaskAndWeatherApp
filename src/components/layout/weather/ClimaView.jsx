import { useState } from "react";
import { ResultWeather } from "./result/ResultWeather";
import { ClimaForm } from "./ClimaForm";
import { useSelector } from "react-redux";

export const ClimaView = () => {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=88dc9b4625213920bd30a8fe5ca04ef4&lang=es`;
  let urlCity = `&q=`;

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=88dc9b4625213920bd30a8fe5ca04ef4&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //weather
    urlWeather = urlWeather + urlCity + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    //forecast

    urlForecast = urlForecast + urlCity + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  const city = useSelector((state) =>
    state.city.name ? state.city.name.toUpperCase() : ""
  );

  return (
    <div className="pt-24 pb-10 lg:p-0 mx-auto flex justify-center items-center animate__animated animate__fadeIn px-5 min-h-screen xl:w-screen">
      <div className="flex flex-col bg-white rounded-lg xl:p-5 ">
        <div className="grid gap-5 p-5 text-center rounded-xl mb-1">
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            Busca el clima de tu ciudad
          </h2>
          <ClimaForm newLocation={getLocation} />
          <h3 className="text-dark font-bold text-3xl mx-auto pb-2 border-b-4 border-primary ">
            {city}
          </h3>
        </div>
        <ResultWeather
          showData={show}
          loadingData={loading}
          weather={weather}
          forecast={forecast}
        />
      </div>
    </div>
  );
};
