import {Navbar} from './components/Navbar'
import {Loading} from './components/Loading'
import {WeatherStat} from './components/WeatherStat'

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
        {isLoading || !weather || <WeatherStat weather={weather} />}
      </div>
    </div>
  )
}