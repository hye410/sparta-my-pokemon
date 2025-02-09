import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { ALERT_TYPE, VALIDATION_RESULT } from "../constant/constant";
import { ALERT_MESSAGE } from "../constant/message";
import { MOCK_DATA_MAP } from "../data/mockData";
import { addPokemon } from "../redux/store/pokemonSlice";
import { Button, FlexBox, Dl, H3, P } from "../style/styledComponents";
import { createAlert } from "../utils/createAlert";
import { checkValidPokemon } from "../utils/validation";
const { SUCCESS, ERROR } = ALERT_TYPE;
const { OVER, ADD, DUPLICATED } = ALERT_MESSAGE;
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;

export default function DetailPokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemonList = useSelector((state) => state.pokemon);
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);
  const alert = (type, content) => createAlert({ type, content })();

  useEffect(() => {
    const targetPokemonId = searchParams.get("id");
    const targetPokemonData = MOCK_DATA_MAP.get(targetPokemonId);
    setPokemon(targetPokemonData);
  }, [searchParams]);

  // 뒤로가기를 실행하는 함수
  const handleGoBack = () => {
    navigate(-1);
  };

  // 포켓몬을 추가하는 함수
  const handleAddPokemon = (newPokemon) => {
    const validationResult = checkValidPokemon(pokemonList, newPokemon); // 나만의 포켓몬에 추가할 수 있는지 유효성 검사를 실시

    if (validationResult === PASS) {
      alert(SUCCESS, ADD);
      dispatch(addPokemon(newPokemon));
    } // 검사 통과

    if (validationResult === OVER_MAXIMUM) alert(ERROR, OVER); // 추가 가능 개수 초과
    if (validationResult === DUPLICATION) alert(ERROR, DUPLICATED); // 중복된 포켓몬
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
