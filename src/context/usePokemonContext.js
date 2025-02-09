import { createContext, useContext } from "react";

export const PokemonContext = createContext(null);

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error(
      "usePokemonContext는 <PokemonContextProvider> 내부에서만 사용할 수 있습니다."
    );
  return context;
};
