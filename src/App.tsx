import Navbar from './components/Navbar'
import { useState } from 'react'

interface API {
  location?: any;
}

export default function Page() {
  const [weather, setWeather] = useState<API>();
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
      <div className='justify-center border-purple-600 border-8 bg-black text-orange-500 h-20'>
        <Navbar title="Weatherly" />   
        <form>
        <input type="text" name="name" />
        <button type="button" onClick={getData}>Submit</button>
      </form>
    </div>
         
    <div>
      <h1>{isLoading || !weather || (<div><h1>{weather.location.name}</h1></div>)}</h1>
    </div>
  </div>
  )
}