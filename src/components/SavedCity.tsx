import { WeatherStat } from "./WeatherStat";
import { Loading } from "./Loading";
import { Routes, Route } from "react-router-dom";
import { SavedCityProps } from "../types";

export const SavedCity = ({ response, loading }: SavedCityProps) => {
  return (
    <div>
      <div className="h-[calc(100vh-64px)]">
        <Routes>
          {!loading || <Route path="/" element={<Loading />} />}
          {loading || !response || (
            <Route path="/" element={<WeatherStat weather={response} />} />
          )}
        </Routes>
      </div>
    </div>
  );
};
