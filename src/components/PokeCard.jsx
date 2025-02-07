import { useNavigate } from "react-router";
import { Button, Card, H4 } from "../style/styledComponents";
import { useMemo } from "react";
export default function PokeCard({ data, actionType = "add", handleAction }) {
  const navigate = useNavigate();
  const isAdd = useMemo(() => actionType === "add", [actionType]);

  const handleNavigate = (targetId) => {
    navigate(`/detail?id=${targetId}`);
  };

  const handleAddPokemon = (e, targetPokemon) => {
    e.stopPropagation();
    handleAction(targetPokemon);
  };

  return (
    <Card
      $flexDirection="column"
      $boxShadow="1px 3px 2px #cacaca"
      $cursor="pointer"
      $isAdd={isAdd}
      onClick={() => handleNavigate(data.id)}
    >
      <img src={data.img_url} />
      <H4 $marginTop="45px" $marginBottom="25px">
        {data.korean_name}
      </H4>
      <p>No. {data.parsedId}</p>
      <Button $margin="25px 0 0 0" onClick={(e) => handleAddPokemon(e, data)}>
        {isAdd ? "추가" : "삭제"}
      </Button>
    </Card>
  );
}
