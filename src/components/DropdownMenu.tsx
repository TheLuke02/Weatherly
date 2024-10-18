import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center text-base font-semibold text-white"
        onClick={toggleDropdown}
      >
        Menu{" "}
        <svg
          className="ml-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li className="flex justify-center py-2 font-semibold">
              <Link to="/settings" onClick={closeDropdown}>
                Settings
              </Link>
            </li>
            <li className="flex justify-center py-2 font-semibold">
              <Link to="/saved" onClick={closeDropdown}>
                Saved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
