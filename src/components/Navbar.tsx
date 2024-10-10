import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submitQuery(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("q", query);
    setQuery("");
    navigate({
      pathname: "/search",
      search: params.toString(),
    });
  }

  return (
    <>
      <nav className="flex h-16 items-center justify-around bg-sky-600">
        <div className="flex">
          <Link to="/">
            <img className="h-14 w-14" src="/sun.png" alt="Sun" />
          </Link>
          <span className="hidden items-center justify-center pl-2 text-2xl font-bold text-white md:flex">
            Weatherly
          </span>
        </div>
        <div className="flex">
          <form
            onSubmit={submitQuery}
            className="flex w-52 items-center justify-center md:w-80"
          >
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="w-36 rounded-full border-2 border-white px-2 py-1 font-semibold text-black placeholder-slate-400 !outline-none transition-all ease-out focus:w-52 md:w-44 md:focus:w-72"
              placeholder="Search your city..."
            />
            <button className="hidden rounded-full px-2 md:block" type="submit">
              <img className="h-9 w-9" src="/arrow.png" alt="Search" />
            </button>
          </form>
        </div>
        <div className="flex text-center font-bold text-white md:text-2xl">
          <Link to="/saved">Saved</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
