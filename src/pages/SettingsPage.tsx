import { ToggleButton } from "../components/ToggleButton";

export const SettingsPage = () => {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="flex h-full w-full justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center space-y-20">
          <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-8">
            <div className="text-center text-3xl font-semibold sm:text-5xl md:text-7xl">
              Temperature
            </div>
            <div className="flex justify-center">
              <ToggleButton
                target={["Celsius", "Farenheit"]}
                toggleReference={"Temperature"}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-center text-3xl font-semibold sm:text-5xl md:text-7xl">
              Wind
            </div>
            <div className="flex justify-center">
              <ToggleButton
                target={["Kilometer", "Miles"]}
                toggleReference={"Wind"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
