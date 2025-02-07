import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { ALERT_TYPE, VALIDATION_RESULT } from "../constant/constant";
import { ALERT_MESSAGE } from "../constant/message";
import MOCK_DATA from "../data/mockData";
import { addPokemon } from "../redux/store/pokemonSlice";
import { Button, FlexBox, Dl, H3, P } from "../style/styledComponents";
import { createAlert } from "../utils/createAlert";
import { checkValidPokemon } from "../utils/validation";
const { SUCCESS, ERROR } = ALERT_TYPE;
const { OVER, ADD, DUPLICATED } = ALERT_MESSAGE;
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;

const _MOCK_DATA = new Map(MOCK_DATA.map((data) => [String(data.id), data]));

export default function DetailPokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemonList = useSelector((state) => state.pokemon);
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const targetPokemonId = searchParams.get("id");
    const targetPokemonData = _MOCK_DATA.get(targetPokemonId);
    setPokemon(targetPokemonData);
  }, [searchParams]);

  const handleGoBack = () => {
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
    const validationResult = checkValidPokemon(pokemonList, newPokemon);
    if (validationResult === PASS) {
      alertSuccess();
      dispatch(addPokemon(newPokemon));
    }
    if (validationResult === OVER_MAXIMUM) alertMaximum();
    if (validationResult === DUPLICATION) alertDuplication();
  };

  return (
    <FlexBox $flexDirection="column">
      <P $width="300px">
        <img width="100%" src={pokemon.img_url} alt={pokemon.korean_name} />
      </P>
      <H3 $marginBottom="40px">{pokemon.korean_name}</H3>
      <Dl>
        <dt>타입 :&nbsp;</dt>
        <dd>{pokemon.types?.join(",")}</dd>
      </Dl>
      <P $marginBottom="50px">{pokemon.description}</P>
      <Button
        $padding="11px 20px"
        $width="100px"
        $margin="0 0 20px 0"
        onClick={() => handleAddPokemon(pokemon)}
      >
        추가
      </Button>
      <Button
        $padding="11px 20px"
        $width="100px"
        $bgColor="rgb(25,25,25)"
        onClick={handleGoBack}
      >
        뒤로가기
      </Button>
    </FlexBox>
  );
}
