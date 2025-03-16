import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "./components/theme/Theme-Provider";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
