import { useState } from "react";
import { WeatherResponse } from "./types";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Saved } from "./pages/Saved";
import { HandleError } from "./components/HandleError";

export default function Page() {
  const [weather, setWeather] = useState<WeatherResponse | null>();
  const [isLoading, setLoading] = useState(false);
  const key = process.env.REACT_APP_KEY;

  async function getData(handleSubmit: string) {
    setLoading(true);

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${handleSubmit}&days=3&aqi=no&alerts=no`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setWeather(json);
    } catch (error) {
      console.log(error, weather);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home fetchData={getData} />} />

      <Route
        path="/search"
        element={
          weather != null ? (
            <Search
              fetchData={getData}
              isLoading={isLoading}
              weather={weather}
            />
          ) : (
            <HandleError />
          )
        }
      />

      <Route path="/saved" element={<Saved fetchData={getData} />} />
    </Routes>
  );
}
