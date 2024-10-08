import { Navbar } from "../components/Navbar";
import { SavedProps } from "../types";

export const Saved = ({ fetchData }: SavedProps) => {
  return (
    <div>
      <Navbar fetchData={fetchData} label="Weatherly" />
      Saved
    </div>
  );
};
