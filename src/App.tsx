import {Navbar} from './components/Navbar'
import { useState } from 'react'
import { WeatherResponse } from './types';


export default function Page() {

  const [handlerSubmit, setHandlerSubmit] = useState("")

  const [weather, setWeather] = useState<WeatherResponse>();
  const [isLoading, setLoading] = useState(false);
  const key = process.env.REACT_APP_KEY;
  async function getData() {
    setLoading(true)
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Pisa&days=2&aqi=no&alerts=no`;
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
        <Navbar handlerSubmit={handlerSubmit} setHandlerSubmit={setHandlerSubmit} label="Weatherly" />   
      </div>
      <form className='my-1'>
        <input className='border-4 border-black mx-1' type="text" name="name" />
        <button className='rounded-3xl border-2 border-black mx-1' type="button" onClick={getData}>Submit</button>
      </form>
      <div>
        <h1>{isLoading || !weather || (<div className='text-6xl'><h1>{weather.location.name}</h1></div>)}</h1>
      </div>
    </div>
  )
}