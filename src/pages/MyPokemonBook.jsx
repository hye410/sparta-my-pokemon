import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokeList from "../components/PokeList";
import { Article } from "../style/styledComponents";

export default function MyPokemonBook() {
  const [myPokemonList, setMyPokemonList] = useState([]);
  return (
    <Article>
      <Dashboard
        pokemonList={myPokemonList}
        setMyPokemonList={setMyPokemonList}
      />
      <PokeList
        myPokemonList={myPokemonList}
        setMyPokemonList={setMyPokemonList}
      />
    </Article>
  );
}
