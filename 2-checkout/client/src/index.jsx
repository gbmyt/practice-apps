import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './components/App.jsx';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
