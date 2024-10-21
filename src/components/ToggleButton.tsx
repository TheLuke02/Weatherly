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
      console.log("Setto Temperature: ", target);
      setCheckedBox(target);
    }

    if (toggleReference === "Wind") {
      localStorage.setItem("Wind", target);
      console.log("Setto Wind: ", target);
      setCheckedBox(target);
    }
  };

  return (
    <div>
      <div className="flex">
        <input
          type="radio"
          onChange={(e) => {}}
          name={`hs-default-radio-${toggleReference}`}
          value={target[0]}
          checked={CheckedBox === target[0]}
          className="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
          id={`hs-default-radio-${toggleReference}`}
          onClick={() => {
            handleToggle(toggleReference, target[0]);
          }}
        />
        <label
          htmlFor={`hs-default-radio-${toggleReference}`}
          className="ms-2 text-sm text-gray-500 dark:text-neutral-400"
        >
          {target[0]}
        </label>
      </div>

      <div className="flex">
        <input
          onChange={(e) => {}}
          type="radio"
          name={`hs-default-radio-${toggleReference}`}
          value={target[1]}
          checked={CheckedBox === target[1]}
          className="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
          id={`hs-default-radio-${toggleReference}`}
          onClick={() => {
            handleToggle(toggleReference, target[1]);
          }}
        />
        <label
          htmlFor={`hs-default-radio-${toggleReference}`}
          className="ms-2 text-sm text-gray-500 dark:text-neutral-400"
        >
          {target[1]}
        </label>
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
