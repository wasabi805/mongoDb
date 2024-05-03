import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App/App.tsx";
// import "./index.css";

// import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
);
