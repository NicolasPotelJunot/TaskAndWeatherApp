import {useSelector} from "react-redux";
import { Spinners } from "./spinner/Spinners";

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

    const city = useSelector(state=>
        (state.city.name)
        ?state.city.name.toUpperCase()
        : ""        
        )

  return (
    <div className='animate__animated animate__zoomInDown px-5'>
        {
            showData === true ? (
                <div className='w-full grid gap-1'>
                    <div className='grid grid-cols-2 py-2 rounded-2xl'>

                        <div className='grid items-start pb-5'>
                            <h3 className='text-lg pb-2 text-center font-bold text-dark'>Clima Actual</h3>
                            <h3 className='text-4xl text-center text-primary font-bold'>{(weather.main.temp- 273.15).toFixed(1)}ºC</h3> 
                            <div className='grid justify-center'>
                                <div className='h-20 overflow-hidden flex justify-center items-center'>
                                    <img src={iconUrl} alt="icon" className='h-36' /> 
                                </div>
                                <p className='bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-4'>{weather.weather[0].description}</p>
                            </div>
                        </div>

                        <div className='grid items-start'>
                            <h3 className='text-dark font-bold text-3xl mb-auto pb-2 border-b-4 border-primary '>{city}</h3>    
                            <div className='grid gap-2 content-center text-lg'>
                                <h5 className="bg-white rounded-xl font-bold text-primary text-sm">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                <h5 className="bg-white rounded-xl font-bold text-primary text-sm">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                <h5 className="bg-white rounded-xl font-bold text-primary text-sm">Sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                <h5 className="bg-white rounded-xl font-bold text-primary text-sm">Humedad: {weather.main.humidity}%</h5>
                                <h5 className="bg-white rounded-xl font-bold text-primary text-sm">Velocidad del viento: {weather.wind.speed}m/s</h5>
                            </div>
                        </div>

                    </div>

                    <div className='py-6 px-10 rounded-2xl'>
                        <h3 className='text-2xl font-bold text-center mb-4 text-dark'>Clima en las próximas horas</h3>

                        <div className='grid grid-cols-3'>
                            <div className=" text-center grid justify-center pt-4">
                                <p className="text-3xl text-primary font-bold border-primary pb-1">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>            
                                <p className='text-primary'>{forecastDate3}h</p>
                                <div className='h-16 overflow-hidden flex justify-center items-center'>
                                    <img src={iconUrl3} alt="icon" className='h-28' /> 
                                </div>
                                <p className='bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-4'>{forecast.list[1].weather[0].description}</p>                                 
                            </div>
                            <div className="text-center grid justify-center pt-4">
                                <p className="text-3xl text-primary font-bold  pb-1">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                <p className='text-primary'>{forecastDate6}h</p>
                                <div className='h-16 overflow-hidden flex justify-center items-center'>
                                    <img src={iconUrl6} alt="icon" className='h-28' /> 
                                </div>
                                <p className="bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-4">{forecast.list[2].weather[0].description}</p>
                            </div>
                            <div className="text-center grid justify-center pt-4">
                                <p className="text-3xl text-primary font-bold pb-1">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                <p className='text-primary'>{forecastDate9}h</p>
                                <div className='h-16 overflow-hidden flex justify-center items-center'>
                                    <img src={iconUrl9} alt="icon" className='h-28' /> 
                                </div>
                                <p className="bg-btn-violet-noHover text-white rounded-xl m-auto py-1 px-4">
                                    {forecast.list[3].weather[0].description}
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                
            ) : (
                <div className='flex justify-center'>
                    <h2 className='text-dark text-center text-lg cursor-default mx-auto'>Ingrese el nombre de su ciudad para ver su clima</h2>
                </div>
            )
        }
    </div>
  )

}
