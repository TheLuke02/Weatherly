import { ToggleButton } from "../components/ToggleButton";

export const SettingsPage = () => {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="flex h-full w-full justify-center">
        <div className="flex h-full w-2/3 flex-col space-y-4 border-2 border-sky-600">
          <div className="flex flex-col">
            <div className="text-center text-3xl font-semibold">
              Temperature
            </div>
            <div className="flex justify-center">
              <ToggleButton
                target={["Celsius", "Farenheit"]}
                toggleReference={"Temperature"}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center text-3xl font-semibold">Wind</div>
            <div className="flex justify-center">
              <ToggleButton
                target={["Kilometer", "Miles"]}
                toggleReference={"Wind"}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>Lenguage</div>
            <div>Selezione lingua</div>
          </div>
        </div>
      </div>
    </div>
  );
};
