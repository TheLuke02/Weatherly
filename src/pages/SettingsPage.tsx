import { ToggleButton } from "../components/ToggleButton";

export const SettingsPage = () => {
  return (
    <div>
      <div className="h-[calc(100vh-108px)] justify-center sm:h-[calc(100vh-116px)] md:h-[calc(100vh-128px)]">
        <div className="flex w-2/3 flex-col border-2 border-sky-600">
          <div className="flex flex-row justify-around">
            <div>Temperatura</div>
            <ToggleButton
              target={["Celsius", "Farenheit"]}
              toggleReference={"Temperature"}
            />
          </div>
          <div className="flex flex-row justify-around">
            <div>Vento</div>
            <ToggleButton
              target={["Kilometer", "Miles"]}
              toggleReference={"Wind"}
            />
          </div>
          <div className="flex flex-row justify-around">
            <div>Lingua</div>
            <div>Selezione lingua</div>
          </div>
        </div>
      </div>
    </div>
  );
};
