import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme/Theme-Provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
