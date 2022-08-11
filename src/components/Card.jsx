import { Spinners } from './Spinners'

export const Card = ({
    showData,
    loadingData,
    weather,
    forecast,
}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + "/" + month + "/" + year;

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if(loadingData){
        return <Spinners />
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }


  return (
    <div className='animate__animated animate__zoomInDown'>
        {
            showData === true ? (
                <div className='w-full grid gap-5'>
                    {/* <h3 className=''>{forecast.city.name}</h3> */}

                    <div className='bg-base-200 grid grid-cols-2 pt-3 px-10 rounded-2xl'>

                        <div className='grid justify-between items-center pb-5'>
                            <h3 className='text-3xl pb-2 text-center font-bold'>Clima Actual</h3>
                            <h3 className='text-7xl text-center pb-4 text-violet-500 font-bold'>{(weather.main.temp- 273.15).toFixed(1)}ºC</h3> 
                            <div className='grid justify-center'>
                                <div className='h-32 overflow-hidden flex justify-center items-center'>
                                    <img src={iconUrl} alt="icon" className='h-52' /> 
                                </div>
                                <p className='bg-violet-500 text-white rounded-xl mx-auto py-2 px-5'>{weather.weather[0].description}</p>
                            </div>
                        </div>

                        <div className='grid gap-2 content-center text-lg'>

                            <h5 className="bg-white rounded-xl px-3 font-bold text-violet-600">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="bg-white rounded-xl px-3 font-bold text-violet-600">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="bg-white rounded-xl px-3 font-bold text-violet-600">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                            <h5 className="bg-white rounded-xl px-3 font-bold text-violet-600">Humedad: {weather.main.humidity}%</h5>
                            <h5 className="bg-white rounded-xl px-3 font-bold text-violet-600">Velocidad del viento: {weather.wind.speed}m/s</h5>

                        </div>


                    </div>

                    <div className='bg-base-200 pt-3 pb-10 px-10 rounded-2xl'>
                        <h3 className='text-3xl font-bold text-center my-2 mb-8'>Clima en las próximas horas</h3>

                        <div className='grid grid-cols-3'>

                            <div className=" text-center grid justify-center pt-4 border-r-2 border-violet-500">
                                <p className="text-5xl text-violet-500 font-bold border-b-2 border-violet-500 pb-4">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>            
                                <p className=''>{forecastDate3}h</p>
                                <img src={iconUrl3} alt="icon" className='h-40 m-auto'/>
                                <p className='bg-violet-500 text-white rounded-xl m-auto py-2 px-5'>{forecast.list[1].weather[0].description}</p>                                 
                            </div>

                            <div className="text-center grid justify-center pt-4 border-r-2 border-violet-500">
                                <p className="text-5xl text-violet-500 font-bold border-b-2 border-violet-500 pb-4">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                <p className=''>{forecastDate6}h</p>
                                <img src={iconUrl6} alt="icon" className='h-40 m-auto'/>
                                <p className="bg-violet-500 text-white rounded-xl m-auto py-2 px-5">{forecast.list[2].weather[0].description}</p>
                            </div>

                            <div className="text-center grid justify-center pt-4">
                                <p className="text-5xl text-violet-500 font-bold border-b-2 border-violet-500 pb-4">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                <p className=''>{forecastDate9}h</p>
                                <img src={iconUrl9} alt="icon" className='h-40 m-auto'/>
                                <p className="bg-violet-500 text-white rounded-xl m-auto py-2 px-5">
                                    {forecast.list[3].weather[0].description}
                                </p>
                            </div>

                        </div>
                    </div>


                </div>
                
            ) : (
                <div className='flex justify-center'>
                    <h2 className='btn text-center text-sm cursor-default mx-auto'>Ingrese el nombre de su ciudad para ver su clima</h2>
                </div>
            )
        }
    </div>
  )

}
