import { useNavigate } from "react-router";
import { StButton, StCard, StH4 } from "../style/StCommon";
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
    <StCard
      $boxShadow="1px 3px 2px #cacaca"
      $cursor="pointer"
      $isAdd={isAdd}
      onClick={() => handleNavigate(data.id)}
    >
      <img src={data.img_url} />
      <StH4 $marginTop="45px" $marginBottom="25px">
        {data.korean_name}
      </StH4>
      <p>No. {data.parsedId}</p>
      <StButton $margin="25px 0 0 0" onClick={(e) => handleAddPokemon(e, data)}>
        {isAdd ? "추가" : "삭제"}
      </StButton>
    </StCard>
  );
}
