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

// MOCK_DATA를 Map()으로 처리해 해당 포켓몬을 좀 더 빨리 찾아올 수 있도록 처리
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

  // 뒤로가기를 실행하는 함수
  const handleGoBack = () => {
    navigate(-1);
  };

  // 추가 완료 팝업
  const successAlert = createAlert({
    type: SUCCESS,
    content: ADD,
  });

  // 중복된 포켓몬을 알리는 팝업
  const duplicationAlert = createAlert({
    type: ERROR,
    content: DUPLICATED,
  });

  // 추가 가능 개수를 초과함을 알리는 팝업
  const overMaximumAlert = createAlert({
    type: ERROR,
    content: OVER,
  });

  // 포켓몬을 추가하는 함수
  const handleAddPokemon = (newPokemon) => {
    const validationResult = checkValidPokemon(pokemonList, newPokemon); // 나만의 포켓몬에 추가할 수 있는지 유효성 검사를 실시

    if (validationResult === PASS) {
      successAlert();
      dispatch(addPokemon(newPokemon));
    } // 검사 통과

    if (validationResult === OVER_MAXIMUM) overMaximumAlert(); // 추가 가능 개수 초과
    if (validationResult === DUPLICATION) duplicationAlert(); // 중복된 포켓몬
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
