import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App.jsx";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/themes.css";

createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
);
