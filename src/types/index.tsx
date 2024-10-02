import { MouseEventHandler } from "react"; // Catturo gli eventi nel caso ce ne fosse bisogno
import { Dispatch, SetStateAction } from "react";
//import exampleResponse from "./example-response.json"

// Tutti i tipi dei props

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; // Controlla se il bottone è stato cliccato o meno
}

export interface NavbarProps {
  fetchData: (handleSubmit: string) => Promise<void>;
  label: string;
}

export interface Submit {
  handlerSubmit: string;
  setHandlerSubmit: Dispatch<SetStateAction<string>>;
}

//export type WeatherResponse = typeof exampleResponse

export interface WeatherResponse {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };

  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          avgtemp_c: number;
          avgvis_km: number;
          avghumidity: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        hour: [
          {
            condition: {
              text: string;
              icon: string;
            };
            time: string;
            temp_c: number;
            is_day: number;
          },
        ];
      },
      {
        date: string;
        day: {
          avgtemp_c: number;
          avgvis_km: number;
          avghumidity: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        hour: [
          {
            condition: {
              text: string;
              icon: string;
            };
            time: string;
            temp_c: number;
            is_day: number;
          },
        ];
      },
      {
        date: string;
        day: {
          avgtemp_c: number;
          avgvis_km: number;
          avghumidity: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        hour: [
          {
            condition: {
              text: string;
              icon: string;
            };
            time: string;
            temp_c: number;
            is_day: number;
          },
        ];
      },
    ];
  };
}

export interface WeatherStatProps {
  weather: WeatherResponse;
}

export interface HourlyForecastProps {
  weather: WeatherResponse;
  selectedDay: number;
}

export interface DailyForecastProps {
  weather: WeatherResponse;
  dayChange: Dispatch<SetStateAction<number>>;
}
