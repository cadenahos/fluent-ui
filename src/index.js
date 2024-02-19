import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
// const exampleDesign = {
//   10: "#010404",
//   20: "#0C1C1C",
//   30: "#0A2F2F",
//   40: "#053D3D",
//   50: "#004B4B",
//   60: "#1A5858",
//   70: "#2E6465",
//   80: "#417172",
//   90: "#537F7F",
//   100: "#668C8D",
//   110: "#78999A",
//   120: "#8AA7A8",
//   130: "#9CB5B6",
//   140: "#AFC3C4",
//   150: "#C2D1D2",
//   160: "#D5E0E0",
// };

// const lightThemeNewExample = {
//   ...createLightTheme(exampleDesign),
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);
