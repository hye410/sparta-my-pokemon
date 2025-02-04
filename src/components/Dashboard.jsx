import { StBoard, StCardWrapper, StH3 } from "../style/StCommon";
import { MAXIMUM_POKEMON } from "../utils/validation";

import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";

export default function Dashboard({ pokemonList, setMyPokemonList }) {
  const initPokeBall = new Array(MAXIMUM_POKEMON - pokemonList.length).fill(
    null
  );
  const myPokemonList = pokemonList.concat(initPokeBall);

  const handleDelete = (targetPokemon) => {
    const { id } = targetPokemon;
    const newList = myPokemonList.filter((pokemon) =>
      pokemon ? pokemon.id !== id : pokemon
    );
    setMyPokemonList(newList);
  };

  return (
    <StBoard $marginBottom="20px">
      <StH3 $color="rgb(246, 12, 20)" $marginBottom="50px" $marginTop="50px">
        나만의 포켓몬
      </StH3>
      <StCardWrapper>
        {myPokemonList.map((pokemon, idx) =>
          pokemon ? (
            <PokeCard
              key={`pokemonCard_${pokemon.id}`}
              data={pokemon}
              actionType={"delete"}
              handleAction={handleDelete}
            />
          ) : (
            <PokeBall key={`pokeBall_${idx}`} />
          )
        )}
      </StCardWrapper>
    </StBoard>
  );
}
