import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dotenv from "dotenv";
import ShoppingCartProvider from "./contexts/ShoppingCartProvider";
import { SnackbarProvider } from "notistack";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </SnackbarProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
