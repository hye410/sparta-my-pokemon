import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import MOCK_DATA from "../data/mockData";
import { StButton, StContainer, StDl, StH3, StP } from "../style/StCommon";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/store/pokemonSlice";
import { checkValidPokemon } from "../utils/validation";
import { createAlert } from "../utils/createAlert";
import { ALERT_TYPE, VALIDATION_RESULT } from "../constant/constant";
import { ALERT_MESSAGE } from "../constant/message";
const { SUCCESS, ERROR } = ALERT_TYPE;
const { OVER, ADD, DUPLICATED } = ALERT_MESSAGE;
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;

const _MOCK_DATA = new Map(MOCK_DATA.map((data) => [String(data.id), data]));

export default function DetailPokemon() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon);
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = searchParams.get("id");
    const targetData = _MOCK_DATA.get(targetId);
    setPokemon(targetData);
  }, [searchParams]);

  const handleBack = () => {
    navigate(-1);
  };
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

  const handleAddPokemon = (newPokemon) => {
    const validResult = checkValidPokemon(pokemonList, newPokemon);
    if (validResult === PASS) {
      alertSuccess();
      dispatch(addPokemon(newPokemon));
    }
    if (validResult === OVER_MAXIMUM) alertMaximum();
    if (validResult === DUPLICATION) alertDuplication();
  };

  return (
    <StContainer>
      <StP $width="300px">
        <img width="100%" src={pokemon.img_url} alt={pokemon.korean_name} />
      </StP>
      <StH3 $marginBottom="40px">{pokemon.korean_name}</StH3>
      <StDl>
        <dt>타입 :&nbsp;</dt>
        <dd>{pokemon.types?.join(",")}</dd>
      </StDl>
      <StP $marginBottom="50px">{pokemon.description}</StP>
      <StButton
        $padding="11px 20px"
        $width="100px"
        $margin="0 0 20px 0"
        onClick={() => handleAddPokemon(pokemon)}
      >
        추가
      </StButton>
      <StButton
        $padding="11px 20px"
        $width="100px"
        $bgColor="rgb(25,25,25)"
        onClick={handleBack}
      >
        뒤로가기
      </StButton>
    </StContainer>
  );
}
