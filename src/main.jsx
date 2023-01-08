import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PrivacyPolice from "./components/PrivacyPolicies";
import "./index.css";
import "@csstools/normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/eye-dropper-client",
    element: <App />,
  },
  {
    path: "/eye-dropper-client/privacy-policies",
    element: <PrivacyPolice />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
