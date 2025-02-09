import { useState } from "react";
import { PokemonContext } from "./usePokemonContext";
import { ACTION_TYPE } from "../constant/constant";

const { ADD, DELETE } = ACTION_TYPE;

export const PokemonContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  const handlePokemonList = (params) => {
    const { type, target } = params;
    if (type === ADD) {
      return addPokemon(target);
    } else if (type === DELETE) {
      return deletePokemon(target);
    }
  };

  const addPokemon = (targetPokemon) => {
    setPokemonList((prev) => [...prev, targetPokemon]);
  };

  const deletePokemon = (targetPokemon) => {
    const { id } = targetPokemon;
    const newPokemonList = pokemonList.filter((pokemon) =>
      pokemon ? pokemon.id !== id : pokemon
    );
    setPokemonList(newPokemonList);
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, handlePokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};
