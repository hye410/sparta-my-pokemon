import { Board, FlexBox, H3 } from "../style/styledComponents";
import { MAXIMUM_POKEMON } from "../utils/validation";
import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";
import { createAlert } from "../utils/createAlert";
import { ALERT_TYPE } from "../constant/constant";

const { WARNING, SUCCESS } = ALERT_TYPE;

export default function Dashboard({ pokemonList, setMyPokemonList }) {
  // 삭제 재확인 팝업
  const confirmDelete = createAlert({
    type: WARNING,
    content: "포켓몬을 삭제하시겠습니까?",
  });

  // 삭제 성공 팝업
  const successAlert = createAlert({
    type: SUCCESS,
    content: "포켓몬이 삭제되었습니다.",
  });

  // 포켓몬이 들어있지 않은 포켓볼의 개수
  const emptyPokeBalls = new Array(MAXIMUM_POKEMON - pokemonList.length).fill(
    null
  );

  // store에 저장된 포켓몬 + 포켓몬이 들어있지 않은 포켓볼 = 나만의 포켓몬 리스트
  const myPokemonList = pokemonList.concat(emptyPokeBalls);

  // 나만의 포켓몬 리스트에서 포켓몬을 삭제하는 이벤트
  const handleDelete = (targetPokemon) => {
    const { id } = targetPokemon;
    confirmDelete().then((res) => {
      if (res.isConfirmed) {
        successAlert();
        const newPokemonList = myPokemonList.filter((pokemon) =>
          pokemon ? pokemon.id !== id : pokemon
        );
        setMyPokemonList(newPokemonList);
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
              buttonType={"delete"}
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
