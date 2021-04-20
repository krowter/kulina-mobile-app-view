import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import App from "./components/App";

import * as theme from "./styles/theme";
import "./styles/globals.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
