import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import MOCK_DATA from "../data/mockData";
import { StButton, StContainer, StDl, StH3, StP } from "../style/StCommon";

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
    $bgColor: "rgb(26,26,26)",
    $padding: "11px 20px",
  },
};

export default function DetailPokemon() {
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
      <StButton {...styles.StButton} onClick={handleBack}>
        뒤로가기
      </StButton>
    </StContainer>
  );
}
