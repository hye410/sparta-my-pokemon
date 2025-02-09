import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { MOCK_DATA_MAP } from "../data/mockData";
import { Button, Dl, FlexBox, H3, P } from "../style/styledComponents";

export default function DetailPokemon() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const targetPokemonId = searchParams.get("id");
    const targetPokemonData = MOCK_DATA_MAP.get(targetPokemonId);
    setPokemon(targetPokemonData);
  }, [searchParams]);

  // 뒤로가기를 실행하는 함수
  const handleGoBack = () => {
    navigate(-1);
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
        $bgColor="rgb(25,25,25)"
        onClick={handleGoBack}
      >
        뒤로가기
      </Button>
    </FlexBox>
  );
}
