import {
  ACTION_TYPE,
  ALERT_TYPE,
  VALIDATION_RESULT,
} from "../constant/constant";
import { ALERT_MESSAGE } from "../constant/message";
import { usePokemonContext } from "../context/usePokemonContext";
import MOCK_DATA from "../data/mockData";
import { Board, FlexBox } from "../style/styledComponents";
import { createAlert } from "../utils/createAlert";
import { checkValidPokemon } from "../utils/validation";
import PokeCard from "./PokeCard";
const { SUCCESS, ERROR } = ALERT_TYPE;
const { OVER, ADD, DUPLICATED } = ALERT_MESSAGE;
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;
const { ADD: ADD_POKEMON } = ACTION_TYPE;

export default function PokeList() {
  const { pokemonList, handlePokemonList } = usePokemonContext();
  const alert = (type, content) => createAlert({ type, content })();

  // 포켓몬을 추가하는 함수
  const handleAddPokemon = (targetPokemon) => {
    const validationResult = checkValidPokemon(pokemonList, targetPokemon); // 나만의 포켓몬에 추가할 수 있는지 유효성 검사를 실시

    if (validationResult === PASS) {
      alert(SUCCESS, ADD);
      handlePokemonList({
        type: ADD_POKEMON,
        target: targetPokemon,
      });
    } // 검사 통과

    if (validationResult === OVER_MAXIMUM) alert(ERROR, OVER); // 추가 가능 개수 초과
    if (validationResult === DUPLICATION) alert(ERROR, DUPLICATED); // 중복된 포켓몬
  };

  return (
    <Board>
      <FlexBox
        $justifyContent="space-evenly"
        $marginBottom="20px"
        $flexWrap="wrap"
      >
        {MOCK_DATA.map((data) => (
          <PokeCard
            key={`pokemonCard_${data.id}`}
            data={data}
            buttonEventHandler={handleAddPokemon}
          />
        ))}
      </FlexBox>
    </Board>
  );
}
