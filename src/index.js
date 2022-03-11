import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

import App from "./App";
import ScreenOne from "./components/screenOne/ScreenOne";
import ScreenTwo from "./components/screenTwo/ScreenTwo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="screen-one" element={<ScreenOne />} />
        <Route path="screen-two" element={<ScreenTwo />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
