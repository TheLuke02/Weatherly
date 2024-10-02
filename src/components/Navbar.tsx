import { NavbarProps } from "../types";
import React from "react";
import { useState } from "react";

export const Navbar = ({ fetchData, label }: NavbarProps) => {
  const [handlerSubmit, setHandlerSubmit] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchData(handlerSubmit);
  }

  return (
    <nav className="flex h-16 items-center justify-between px-5">
      <div className="flex space-x-3">
        <img className="h-14 w-14" src="/sun.png" alt="Sun" />
        <span className="hidden items-center justify-center text-2xl font-bold text-white md:flex">
          {label}
        </span>
      </div>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="flex w-52 items-center justify-center md:w-80"
        >
          <input
            value={handlerSubmit}
            onChange={(e) => {
              setHandlerSubmit(e.target.value);
            }}
            className="w-36 rounded-full border-2 border-white px-2 py-1 font-bold text-black placeholder-slate-400 !outline-none transition-all ease-out focus:w-52 md:w-44 md:focus:w-72"
            placeholder="Search your city..."
          />
          <button className="hidden rounded-full px-2 md:block" type="submit">
            <img className="h-9 w-9" src="/arrow.png" alt="Search" />
          </button>
        </form>
      </div>
      <div className="flex text-center font-bold text-white">
        <span>Profilo</span>
      </div>
    </nav>
  );
};
