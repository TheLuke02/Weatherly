import { ToggleButton } from "../components/ToggleButton";

export const IndexPage = () => {
  return (
    <div>
      <div className="flex h-[calc(100vh-64px)] justify-center">
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
              target={["kilometer", "miles"]}
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
