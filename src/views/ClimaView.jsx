import React, { useState } from 'react'
import { Card } from '../components/Card'
import { ClimaForm } from '../components/ClimaForm'


export const ClimaView = () => {    

    
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=88dc9b4625213920bd30a8fe5ca04ef4&lang=es`
    let urlCity = `&q=`

    let urlForecast= "https://api.openweathermap.org/data/2.5/forecast?appid=88dc9b4625213920bd30a8fe5ca04ef4&lang=es"

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")


    const getLocation = async(loc)=>{

        setLoading(true)
        setLocation(loc)


        
        //weather
        urlWeather = urlWeather + urlCity + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

         //forecast

         urlForecast = urlForecast + urlCity + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }


  return (
    <div className='flex flex-col'>
        <div className='bg-base-200 grid gap-5 p-5 text-center rounded-xl mb-5'>
            <h2 className='text-4xl font-bold '>Busca el clima de tu ciudad</h2>
            <ClimaForm newLocation = {getLocation}/>
        </div>
        <Card
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
        />
    </div>
  )
}
