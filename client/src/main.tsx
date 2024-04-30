import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App/App.tsx";
// import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
    {/* <App /> */}
  </React.StrictMode>,
);
