import { ToggleButtonProps } from "../types";
import { ContextType } from "../types";
import { useOutletContext } from "react-router-dom";
export const ToggleButton = ({
  target,
  toggleReference,
}: ToggleButtonProps) => {
  const { windType, temperatureType } = useOutletContext<ContextType>();

  const handleToggle = () => {
    console.log("A");
  };

  return (
    <div className="inline-flex items-center gap-2" onClick={handleToggle}>
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
