import { Navbar } from "../components/Navbar";
import { Loading } from "../components/Loading";
import { WeatherStat } from "../components/WeatherStat";
import { SearchProps } from "../types";

export const Search = ({ fetchData, isLoading, weather }: SearchProps) => {
  return (
    <div>
      <Navbar fetchData={fetchData} label="Weatherly" />

      <div className="h-[calc(100vh-64px)]">
        {!isLoading || <Loading />}
        {isLoading || !weather || <WeatherStat weather={weather} />}
      </div>
    </div>
  );
};
