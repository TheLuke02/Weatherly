import { Navbar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import { WeatherStat } from "./components/WeatherStat";
import { useState } from "react";
import { WeatherResponse } from "./types";
import { Routes, Route } from "react-router-dom";
import { SavedCity } from "./components/SavedCity";

export default function Page() {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [isLoading, setLoading] = useState(false);
  const key = process.env.REACT_APP_KEY;

  const Layout = () => {
    return (
      <>
        <Navbar fetchData={getData} label="Weatherly" />
        <SavedCity loading={isLoading} response={weather} />
      </>
    );
  };

  async function getData(handleSubmit: string) {
    setLoading(true);

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${handleSubmit}&days=3&aqi=no&alerts=no`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setWeather(json);
    } catch (error) {
      console.log(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navbar fetchData={getData} label="Weatherly" />}
        />
      </Routes>

      <div className="h-[calc(100vh-64px)]">
        <Routes>
          {!isLoading || <Route path="/" element={<Loading />} />}
          {isLoading || !weather || (
            <Route path="/" element={<WeatherStat weather={weather} />} />
          )}
          <Route path="/saved" element={<Layout />} />
        </Routes>
      </div>
    </div>
  );
}
