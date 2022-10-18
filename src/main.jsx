import React from "react";
import ReactDOM from "react-dom/client";
// import "normalize.css";
import "./index.css";
import AppRouter from "@/router";
import "@/mock";
import { Provider } from "react-redux";
import { store } from "@/store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
