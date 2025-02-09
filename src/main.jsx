import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { PokemonContextProvider } from "./context/pokemonContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </StrictMode>
);
