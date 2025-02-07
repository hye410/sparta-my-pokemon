import { useNavigate } from "react-router";
import { Button, Card, H4 } from "../style/styledComponents";
import { useMemo } from "react";
export default function PokeCard({
  data,
  buttonType = "add",
  buttonEventHandler,
}) {
  const navigate = useNavigate();
  const isAddButton = useMemo(() => buttonType === "add", [buttonType]); // 해당 포켓 카드의 버튼이 '추가'인지 '삭제'인지 판별

  // 디테일 페이지로 이동하는 함수
  const goToDetailPage = (targetId) => {
    navigate(`/detail?id=${targetId}`);
  };

  // 버튼의 타입에 따라 추가or삭제를 실행하는 함수
  const handlePokemonCard = (e, targetPokemon) => {
    e.stopPropagation();
    buttonEventHandler(targetPokemon);
  };

  return (
    <Card
      $flexDirection="column"
      $boxShadow="1px 3px 2px #cacaca"
      $cursor="pointer"
      $isAdd={isAddButton}
      onClick={() => goToDetailPage(data.id)}
    >
      <img src={data.img_url} />
      <H4 $marginTop="45px" $marginBottom="25px">
        {data.korean_name}
      </H4>
      <p>No. {data.padId}</p>
      <Button $margin="25px 0 0 0" onClick={(e) => handlePokemonCard(e, data)}>
        {isAddButton ? "추가" : "삭제"}
      </Button>
    </Card>
  );
}
