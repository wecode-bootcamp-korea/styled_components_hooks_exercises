import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
