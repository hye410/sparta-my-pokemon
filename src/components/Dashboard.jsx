import { useDispatch, useSelector } from "react-redux";
import { StBoard, StCardWrapper, StH3 } from "../style/StCommon";
import { MAXIMUM_POKEMON } from "../utils/validation";
import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";
import { deletePokemon } from "../redux/store/pokemonSlice";

const styles = {
  StBoard: { $marginBottom: "20px" },
  StH3: {
    $marginBottom: "50px",
    $marginTop: "50px",
  },
};

export default function Dashboard() {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const initPokeBall = new Array(MAXIMUM_POKEMON - pokemonList.length).fill(
    null
  );
  const myPokemonList = pokemonList.concat(initPokeBall);

  const handleDelete = (targetPokemon) => {
    const { id } = targetPokemon;
    dispatch(deletePokemon(id));
  };

  return (
    <StBoard {...styles.StBoard}>
      <StH3 {...styles.StH3}>나만의 포켓몬</StH3>
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
