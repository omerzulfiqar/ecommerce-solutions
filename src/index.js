import React from "react";
import { render } from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppContainer from "./containers/appContainer/appContainer";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9e2b07",
      light: "#d65b33",
      dark: "#6e0000",
    },
    secondary: {
      main: "#e0e0e0",
      light: "#ffffff",
      dark: "#aeaeae",
    },
  },
  typography:{
    fontFamily:['Ubuntu']
  }
});

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppContainer />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
