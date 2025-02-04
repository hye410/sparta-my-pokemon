import { useState } from "react";
import Dashboard from "../components/DashBoard";
import PokeList from "../components/PokeList";
import { StMyPokemonBook } from "../style/StMyPokemonBook";

export default function MyPokemonBook() {
  const [myPokemonList, setMyPokemonList] = useState([]); // 나만의 포켓몬에 담긴 포켓몬들

  return (
    <StMyPokemonBook>
      <Dashboard
        pokemonList={myPokemonList}
        setMyPokemonList={setMyPokemonList}
      />
      <PokeList addPokemon={setMyPokemonList} />
    </StMyPokemonBook>
  );
}
