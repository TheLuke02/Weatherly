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
            className="text-center text-lg sm:text-2xl md:text-3xl"
          >
            {target[0]}
          </label>
        </div>
        <div className="flex justify-center">
          <input
            className="h-5 w-5 accent-sky-600 sm:h-6 sm:w-6 md:h-8 md:w-8"
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
            className="text-center text-lg sm:text-2xl md:text-3xl"
          >
            {target[1]}
          </label>
        </div>
        <div className="flex justify-center">
          <input
            className="h-5 w-5 accent-sky-600 sm:h-6 sm:w-6 md:h-8 md:w-8"
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
