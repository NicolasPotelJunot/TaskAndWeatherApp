export const WeatherNextHours = ({ forecast, weather }) => {
  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";

  let url = "http://openweathermap.org/img/w/";

  let iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
  let iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
  let iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

  forecastDate3 =
    forecast.list[1].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[1].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[1].dt_txt.substring(0, 4) +
    " " +
    forecast.list[1].dt_txt.substring(11, 13);
  forecastDate6 =
    forecast.list[2].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[2].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[2].dt_txt.substring(0, 4) +
    " " +
    forecast.list[2].dt_txt.substring(11, 13);
  forecastDate9 =
    forecast.list[3].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[3].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[3].dt_txt.substring(0, 4) +
    " " +
    forecast.list[3].dt_txt.substring(11, 13);

  return (
    <div className="py-6 md:py-10 md:px-10 lg:py-6 rounded-2xl">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-dark">
        Clima en las próximas horas
      </h3>

      <div className="grid grid-cols-3 md:gap-3 2xl:gap-0">
        <article className=" text-center grid justify-center pt-4">
          <p className="text-2xl md:text-3xl text-primary font-bold pb-1">
            {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
          </p>
          <p className="px-5 text-sm text-primary">{forecastDate3}h</p>
          <div className="h-16 overflow-hidden flex justify-center items-center">
            <img src={iconUrl3} alt="icon" className="h-28" />
          </div>
          <p className="bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-2 md:px-4 text-sm h-8 text-center">
            {forecast.list[1].weather[0].description}
          </p>
        </article>
        <article className="text-center grid justify-center pt-4">
          <p className="text-2xl md:text-3xl text-primary font-bold pb-1">
            {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
          </p>
          <p className="px-5 text-sm text-primary">{forecastDate6}h</p>
          <div className="h-16 overflow-hidden flex justify-center items-center">
            <img src={iconUrl6} alt="icon" className="h-28" />
          </div>
          <p className="bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-2 md:px-4 text-sm h-8 text-center">
            {forecast.list[2].weather[0].description}
          </p>
        </article>
        <article className="text-center grid justify-center pt-4">
          <p className="text-2xl md:text-3xl text-primary font-bold pb-1">
            {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
          </p>
          <p className="px-5 text-sm text-primary">{forecastDate9}h</p>
          <div className="h-16 overflow-hidden flex justify-center items-center">
            <img src={iconUrl9} alt="icon" className="h-28" />
          </div>
          <p className="bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-2 md:px-4 text-sm h-8 text-center">
            {forecast.list[3].weather[0].description}
          </p>
        </article>
      </div>

    </div>
  );
};
