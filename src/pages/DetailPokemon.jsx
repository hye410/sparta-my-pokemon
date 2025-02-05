import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import MOCK_DATA from "../data/mockData";
import { StButton, StContainer, StDl, StH3, StP } from "../style/StCommon";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/store/pokemonSlice";
import { checkValidPokemon } from "../utils/validation";
import { createAlert } from "../utils/createAlert";

const _MOCK_DATA = new Map(MOCK_DATA.map((data) => [String(data.id), data]));
const styles = {
  StImg: {
    $width: "300px",
  },
  StH3: {
    $marginBottom: "40px",
    $color: "red",
  },
  StP: {
    $marginBottom: "50px",
  },
  StButton: {
    // $bgColor: "rgb(26,26,26)",
    $padding: "11px 20px",
    $width: "100px",
  },
};

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
    type: "success",
    content: "포켓볼에 추가되었습니다.",
  });

  const alertDuplication = createAlert({
    type: "error",
    content: "이미 추가된 포켓몬입니다.",
  });

  const alertMaximum = createAlert({
    type: "error",
    content: "포켓몬은 최대 6개까지만 선택할 수 있어요.",
  });

  const handleAddPokemon = (newPokemon) => {
    const validResult = checkValidPokemon(pokemonList, newPokemon);
    if (validResult === "pass") {
      alertSuccess();
      dispatch(addPokemon(newPokemon));
    }
    if (validResult === "overMaximum") alertMaximum();
    if (validResult === "duplication") alertDuplication();
  };

  return (
    <StContainer>
      <StP {...styles.StImg}>
        <img width="100%" src={pokemon.img_url} alt={pokemon.korean_name} />
      </StP>
      <StH3 {...styles.StH3}>{pokemon.korean_name}</StH3>
      <StDl>
        <dt>타입 :&nbsp;</dt>
        <dd>{pokemon.types?.join(",")}</dd>
      </StDl>
      <StP {...styles.StP}>{pokemon.description}</StP>
      <StButton
        {...styles.StButton}
        $margin="0 0 20px 0"
        onClick={() => handleAddPokemon(pokemon)}
      >
        추가
      </StButton>
      <StButton
        {...styles.StButton}
        $bgColor="rgb(25,25,25)"
        onClick={handleBack}
      >
        뒤로가기
      </StButton>
    </StContainer>
  );
}
