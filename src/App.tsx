import {Navbar} from './components/Navbar'
import { useState } from 'react'
import { WeatherResponse } from './types';


export default function Page() {
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
        <Navbar label="Weatherly" />   
        <form>
          <input type="text" name="name" />
          <button type="button" onClick={getData}>Submit</button>
        </form>
      </div>
    <div>
      <h1>{isLoading || !weather || (<div className='text-6xl'><h1>{weather.location.name}</h1></div>)}</h1>
    </div>
  </div>
  )
}