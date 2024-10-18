import { ToggleButtonProps } from "../types";
export const ToggleButton = ({
  target,
  toggleReference,
}: ToggleButtonProps) => {
  const handleToggle = (toggleReference: string) => {
    if (
      toggleReference === "Temperature" &&
      localStorage.getItem(toggleReference) !== "Celsius"
    ) {
      console.log("Imposto Celsius");
      localStorage.setItem(toggleReference, "Celsius");
    } else if (
      toggleReference === "Temperature" &&
      localStorage.getItem(toggleReference) !== "Farenheit"
    ) {
      console.log("Imposto Farenheit");
      localStorage.setItem(toggleReference, "Farenheit");
    }

    if (
      toggleReference === "Wind" &&
      localStorage.getItem(toggleReference) !== "Kilometer"
    ) {
      console.log("Imposto Kilometer");
      localStorage.setItem(toggleReference, "Kilometer");
    } else if (
      toggleReference === "Wind" &&
      localStorage.getItem(toggleReference) !== "Miles"
    ) {
      console.log("Imposto Miles");
      localStorage.setItem(toggleReference, "Miles");
    }
  };

  return (
    <div
      className="inline-flex items-center gap-2"
      onClick={() => handleToggle(toggleReference)}
    >
      <label
        htmlFor={`switch-component-on-${toggleReference}`}
        className="cursor-pointer text-sm text-slate-600"
      >
        {target[0]}
      </label>

      <div className="relative inline-block h-5 w-11">
        <input
          id={`switch-component-on-${toggleReference}`}
          type="checkbox"
          className="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-sky-600 transition-colors duration-300"
        />
        <label
          htmlFor={`switch-component-on-${toggleReference}`}
          className="absolute left-0 top-0 h-5 w-5 cursor-pointer rounded-full border bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-6"
        ></label>
      </div>

      <label
        htmlFor={`switch-component-on-${toggleReference}`}
        className="cursor-pointer text-sm text-slate-600"
      >
        {target[1]}
      </label>
    </div>
  );
};
