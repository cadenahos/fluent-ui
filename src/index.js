import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, FontSizes } from "@fluentui/react";
// Define your color palette
const myTheme = createTheme({
  palette: {
    themePrimary: "#008080",
    themeLighterAlt: "#f0fbfb",
    themeLighter: "#b3e5e5",
    themeLight: "#7fd2d2",
    themeTertiary: "#2ca6a6",
    themeSecondary: "#008b8b",
    themeDarkAlt: "#007d7d",
    themeDark: "#006c6c",
    themeDarker: "#004f4f",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff",
  },
  fonts: {
    medium: {
      fontFamily: "Lato, sans-serif",
      fontSize: FontSizes.medium,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>
);
