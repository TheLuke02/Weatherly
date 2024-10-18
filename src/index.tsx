import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { IndexPage } from "./pages/IndexPage";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import { SavedPage } from "./pages/SavedPage";
import { SettingsPage } from "./pages/SettingsPage";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/saved",
        element: <SavedPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
