import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux/store";
import App from "./components/App";

import * as theme from "./styles/theme";
import "./styles/globals.css";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
