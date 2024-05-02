import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StaffProvider } from "./context/staffContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StaffProvider>
        <App />
      </StaffProvider>
    </BrowserRouter>
  </React.StrictMode>
);
