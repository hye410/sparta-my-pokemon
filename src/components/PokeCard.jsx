import { useNavigate } from "react-router";
import { StButton, StCard, StH4 } from "../style/StCommon";
import { useMemo } from "react";
const styles = {
  StCard: {
    $boxShadow: "1px 3px 2px #cacaca",
    $justifyContent: "space-between",
    $cursor: "pointer",
  },
  StH4: {
    $marginTop: "45px",
    $marginBottom: "25px",
  },
  StButton: {
    $margin: "25px 0 0 0",
  },
};

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
      {...{ ...styles.StCard, $width: isAdd ? "200px" : "150px" }}
      onClick={() => handleNavigate(data.id)}
    >
      <img src={data.img_url} />
      <StH4 {...styles.StH4}>{data.korean_name}</StH4>
      <p>No. 00{data.id}</p>
      <StButton {...styles.StButton} onClick={(e) => handleAddPokemon(e, data)}>
        {isAdd ? "추가" : "삭제"}
      </StButton>
    </StCard>
  );
}
