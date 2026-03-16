import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme as antdTheme } from "antd";
import App from "./App";
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/globals.css";
import "./styles/antd-overrides.css";

const getAntdAlgorithm = () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";

  return currentTheme === "dark"
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: getAntdAlgorithm(),
        token: {
          colorPrimary: "#111111",
          borderRadius: 16,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
