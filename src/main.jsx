import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const root = createRoot(document.getElementById("root"));

const renderApp = () => (
  <Theme preset={presetGpnDefault}>
    <App />
  </Theme>
);

root.render(renderApp());
