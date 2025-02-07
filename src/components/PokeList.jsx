import { useDispatch, useSelector } from "react-redux";
import MOCK_DATA from "../data/mockData";
import { Board, FlexBox } from "../style/styledComponents";
import { createAlert } from "../utils/createAlert";
import { checkValidPokemon } from "../utils/validation";
import PokeCard from "./PokeCard";
import { addPokemon } from "../redux/store/pokemonSlice";
import { ALERT_TYPE, VALIDATION_RESULT } from "../constant/constant";
import { ALERT_MESSAGE } from "../constant/message";
const { SUCCESS, ERROR } = ALERT_TYPE;
const { OVER, ADD, DUPLICATED } = ALERT_MESSAGE;
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;

export default function PokeList() {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const alertSuccess = createAlert({
    type: SUCCESS,
    content: ADD,
  });

  const alertDuplication = createAlert({
    type: ERROR,
    content: DUPLICATED,
  });

  const alertMaximum = createAlert({
    type: ERROR,
    content: OVER,
  });

  const handleAddPokemon = (targetPokemon) => {
    const validResult = checkValidPokemon(pokemonList, targetPokemon);
    if (validResult === PASS) {
      alertSuccess();
      dispatch(addPokemon(targetPokemon));
    }
    if (validResult === OVER_MAXIMUM) alertMaximum();
    if (validResult === DUPLICATION) alertDuplication();
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
            handleAction={handleAddPokemon}
          />
        ))}
      </FlexBox>
    </Board>
  );
}
