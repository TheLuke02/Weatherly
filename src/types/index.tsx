import { MouseEventHandler } from "react"; // Catturo gli eventi nel caso ce ne fosse bisogno
import { Dispatch, SetStateAction } from "react";


// Tutti i tipi dei props

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; // Controlla se il bottone è stato cliccato o meno
}

export interface NavbarProps {
    fetchData: (handleSubmit: string) => Promise<void>;
    label: string;
}

export interface Submit {
    handlerSubmit: string;
    setHandlerSubmit: Dispatch<SetStateAction<string>>
}

export interface WeatherResponse {
    location: {name: string};
    current: {temp_c: number};
}