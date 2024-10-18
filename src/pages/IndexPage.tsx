import { useEffect } from "react";

export const IndexPage = () => {
  useEffect(() => {
    if (localStorage.getItem("Temperature") == null) {
      localStorage.setItem("Temperature", "Celsius");
    }
    if (localStorage.getItem("Wind") == null) {
      localStorage.setItem("Wind", "kilometer");
    }
    if (localStorage.getItem("Lenguage") == null) {
      localStorage.setItem("Lenguage", "en");
    }
  });
  return (
    <div className="h-[calc(100vh-108px)] justify-center sm:h-[calc(100vh-116px)] md:h-[calc(100vh-128px)]">
      Home page
    </div>
  );
};
