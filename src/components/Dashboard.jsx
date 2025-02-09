import { ACTION_TYPE, ALERT_TYPE } from "../constant/constant";
import { usePokemonContext } from "../context/usePokemonContext";
import { Board, FlexBox, H3 } from "../style/styledComponents";
import { createAlert } from "../utils/createAlert";
import { MAXIMUM_POKEMON } from "../utils/validation";
import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";

const { WARNING, SUCCESS } = ALERT_TYPE;
const { DELETE } = ACTION_TYPE;

export default function Dashboard() {
  const { pokemonList, handlePokemonList } = usePokemonContext();

  const alert = (type, content) => createAlert({ type, content })();

  // 포켓몬이 들어있지 않은 포켓볼의 개수
  const emptyPokeBalls = new Array(MAXIMUM_POKEMON - pokemonList.length).fill(
    null
  );

  // store에 저장된 포켓몬 + 포켓몬이 들어있지 않은 포켓볼 = 나만의 포켓몬 리스트
  const myPokemonList = pokemonList.concat(emptyPokeBalls);

  // 나만의 포켓몬 리스트에서 포켓몬을 삭제하는 이벤트
  const handleDelete = (targetPokemon) => {
    alert(WARNING, "포켓몬을 삭제하시곘습니까?").then((res) => {
      if (res.isConfirmed) {
        alert(SUCCESS, "포켓몬이 삭제되었습니다.");
        handlePokemonList({ type: DELETE, target: targetPokemon });
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
              buttonType={DELETE}
              buttonEventHandler={handleDelete}
            />
          ) : (
            <PokeBall key={`pokeBall_${idx}`} />
          )
        )}
      </FlexBox>
    </Board>
  );
}
