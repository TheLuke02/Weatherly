import { ToggleButtonProps } from "../types";
import { useState } from "react";

export const ToggleButton = ({
  target,
  toggleReference,
}: ToggleButtonProps) => {
  const [CheckedBox, setCheckedBox] = useState<string | null>(
    localStorage.getItem(toggleReference),
  );

  const handleToggle = (toggleReference: string, target: string) => {
    if (toggleReference === "Temperature") {
      localStorage.setItem("Temperature", target);
      setCheckedBox(target);
    }

    if (toggleReference === "Wind") {
      localStorage.setItem("Wind", target);
      setCheckedBox(target);
    }
  };

  return (
    <div className="flex flex-row space-x-6">
      <div className="flex flex-col justify-center space-y-1">
        <div className="flex justify-center">
          <label
            htmlFor={`hs-default-radio-${toggleReference}`}
            className="text-center text-lg"
          >
            {target[0]}
          </label>
        </div>
        <div className="flex justify-center">
          <input
            className="h-5 w-5 accent-sky-600"
            type="radio"
            onChange={(e) => {}}
            name={`hs-default-radio-${toggleReference}`}
            value={target[0]}
            checked={CheckedBox === target[0]}
            id={`hs-default-radio-${toggleReference}`}
            onClick={() => {
              handleToggle(toggleReference, target[0]);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-1">
        <div className="flex justify-center">
          <label
            htmlFor={`hs-default-radio-${toggleReference}`}
            className="text-center text-lg"
          >
            {target[1]}
          </label>
        </div>
        <div className="flex justify-center">
          <input
            className="h-5 w-5 accent-sky-600"
            type="radio"
            onChange={(e) => {}}
            name={`hs-default-radio-${toggleReference}`}
            value={target[1]}
            checked={CheckedBox === target[1]}
            id={`hs-default-radio-${toggleReference}`}
            onClick={() => {
              handleToggle(toggleReference, target[1]);
            }}
          />
        </div>
      </div>
    </div>
  );
};
/*
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
    */
