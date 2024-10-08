import { Navbar } from "../components/Navbar";
import { HomeProps } from "../types";

export const Home = ({ fetchData }: HomeProps) => {
  return (
    <div>
      <Navbar fetchData={fetchData} label="Weatherly" />
      Home
    </div>
  );
};
