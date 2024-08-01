import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext.tsx";

const base = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.baseURL = base || "http://localhost:8800/api/v1";
// axios.defaults.baseURL = "https://backend-wordy.netlify.app/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
