import {Navbar} from './components/Navbar'
import {Loading} from './components/Loading'

import { useState } from 'react'
import { WeatherResponse } from './types';


export default function Page() {

  const [weather, setWeather] = useState<WeatherResponse>();
  const [isLoading, setLoading] = useState(false);
  const key = process.env.REACT_APP_KEY;

  async function getData(handleSubmit: string) {
    setLoading(true)
    
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${handleSubmit}&days=2&aqi=no&alerts=no`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setWeather(json)
    } catch (error) {
      console.log(null);
    } finally {
      setLoading(false)
    }
  }  

  return (
    <div>
      <div className="bg-slate-800">
        <Navbar fetchData={getData} label="Weatherly" />   
      </div>
      
      <div className='h-[calc(100vh-64px)]'>
        {!isLoading || <Loading />}
          {
            isLoading || !weather || 
            (
            <div className='text-6xl'>
              <h1>
                {weather.location.name}
                {weather.current.temp_c}
              </h1>
            </div>
            )
          }
      </div>
    </div>
  )
}

/**
 * <div className='flex flex-col h-full'>
        <div className='flex flex-row justify-center border-4 my-2 border-black'>
            <div>Nome</div>
        </div>
        <div className='flex flex-row justify-center border-4 my-2 border-black'>
            <div className='flex-1 text-center border-r-2'>Citta</div>
            <div className='flex-1 text-center border-r-2'>Regione</div>
            <div className='flex-1 text-center border-r-2'>Nazione</div>
            <div className='flex-1 text-center'>Continente</div>
        </div>
        <div className='flex flex-row justify-center border-4 my-2 border-black'>
            <div className='flex-1 text-center border-r-2'>Oggi</div>
            <div className='flex-1 text-center border-r-2'>Domani</div>
            <div className='flex-1 text-center'>Dopodomani</div>
        </div>
        <div className='flex flex-row my-10 justify-center border-4 border-black'>
            <div className='flex-1 text-center'>Robe</div>
        </div>
    </div>
 */