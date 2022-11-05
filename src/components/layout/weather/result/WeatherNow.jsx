export const WeatherNow = (weatherProps) => {
  const { main } = weatherProps.weatherProps;

  let url = "http://openweathermap.org/img/w/";
  let iconUrl = url + weatherProps.weatherProps.weather[0].icon + ".png";

  return (
    <article className="grid lg:grid-cols-2 lg:py-2 rounded-2xl">

      <div className="md:flex md:items-center md:justify-center lg:grid items-start lg:pb-5">
        <div>
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl lg:pb-2 text-center font-bold text-dark">
            Clima Actual
          </h3>
          <h3 className="text-3xl lg:text-4xl text-center text-primary font-bold">
            {(main.temp - 273.15).toFixed(1)}ºC
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 my-2 justify-center items-center">
          <div className="h-20 overflow-hidden flex justify-end lg:justify-center items-center">
            <img src={iconUrl} alt="icon" className="h-36" />
          </div>
          <p className="bg-btn-violet-noHover text-white rounded-xl w-32 text-center py-1 px-4 h-8 lg:mx-auto">
            {weatherProps.weatherProps.weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid items-start lg:items-center md:mt-5 lg:mt-0">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:px-4 content-center">
          <h5 className="rounded-xl font-bold text-primary text-sm lg:text-lg">
            Temperatura máxima: {(main.temp_max - 273.15).toFixed(1)}ºC
          </h5>
          <h5 className="rounded-xl md:text-right lg:text-left font-bold text-primary text-sm lg:text-lg">
            Temperatura mínima: {(main.temp_min - 273.15).toFixed(1)}ºC
          </h5>
          <h5 className="rounded-xl font-bold text-primary text-sm lg:text-lg">
            Sensación térmica: {(main.feels_like - 273.15).toFixed(1)}ºC
          </h5>
          <h5 className="rounded-xl md:pl-8 lg:pl-0 font-bold text-primary text-sm lg:text-lg">
            Humedad: {main.humidity}%
          </h5>
          <h5 className="rounded-xl font-bold text-primary text-sm lg:text-lg">
            Velocidad del viento: {weatherProps.weatherProps.wind.speed}m/s
          </h5>
        </div>
      </div>

    </article>
  );
};
