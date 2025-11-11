import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);