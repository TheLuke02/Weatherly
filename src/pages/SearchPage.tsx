import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WeatherResponse } from "../types";
import { Loading } from "../components/Loading";
import { WeatherStat } from "../components/WeatherStat";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const key = process.env.REACT_APP_KEY;

  const fetchData = async (city: string) => {
    setLoading(true);
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`;
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
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setName(q);
    } else {
      setName("");
    }

    console.log(name);
    fetchData(name);
  }, [searchParams, name]);

  return (
    <div>
      <div className="h-[calc(100vh-64px)]">
        {!isLoading || <Loading />}
        {isLoading || !weather || <WeatherStat weather={weather} />}
      </div>
    </div>
  );
}

/**
 *
 *
 *
 *
 */
