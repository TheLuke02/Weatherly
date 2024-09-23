import { MouseEventHandler } from "react"; // Catturo gli eventi nel caso ce ne fosse bisogno

// Tutti i tipi dei props

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; // Controlla se il bottone è stato cliccato o meno
}

export interface NavbarProps {
    title: string;
}

export interface WeatherResponse {
    location: {name: string};
}