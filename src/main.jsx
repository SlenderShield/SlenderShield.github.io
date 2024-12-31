import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './components/Theme-Provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
