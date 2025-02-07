import { useDispatch, useSelector } from "react-redux";
import { Board, FlexBox, H3 } from "../style/styledComponents";
import { MAXIMUM_POKEMON } from "../utils/validation";
import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";
import { deletePokemon } from "../redux/store/pokemonSlice";
import { createAlert } from "../utils/createAlert";
import { ALERT_TYPE } from "../constant/constant";

const { WARNING, SUCCESS } = ALERT_TYPE;
export default function Dashboard() {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const deleteAlert = createAlert({
    type: WARNING,
    content: "포켓몬을 삭제하시겠습니까?",
  });

  const deleteSuccessAlert = createAlert({
    type: SUCCESS,
    content: "포켓몬이 삭제되었습니다.",
  });

  const initPokeBall = new Array(MAXIMUM_POKEMON - pokemonList.length).fill(
    null
  );
  const myPokemonList = pokemonList.concat(initPokeBall);

  const handleDelete = (targetPokemon) => {
    const { id } = targetPokemon;
    deleteAlert().then((res) => {
      if (res.isConfirmed) {
        deleteSuccessAlert();
        dispatch(deletePokemon(id));
      }
    });
  };

  return (
    <Board $marginBottom="20px">
      <H3 $marginBottom="50px" $marginTop="50px">
        나만의 포켓몬
      </H3>
      <FlexBox
        $justifyContent="space-evenly"
        $flexWrap="wrap"
        $marginBottom="20px"
      >
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
      </FlexBox>
    </Board>
  );
}
