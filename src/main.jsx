// Importa o modo estrito do React
import { StrictMode } from "react";

// Importa createRoot para renderizar a aplicação
import { createRoot } from "react-dom/client";

// Importa o componente principal
import App from "./App.jsx";

// Importa o CSS global
import "./index.css";

// Procura a div com id="aplicacao"
// e renderiza o App dentro dela
createRoot(document.getElementById("aplicacao")).render(
  <StrictMode>
    <App />
  </StrictMode>
);