import { useNavigate } from "react-router";
import { StButton, StCard, StH4 } from "../style/StCommon";
const styles = {
  StCard: {
    $width: "200px",
    $boxShadow: "1px 3px 2px #cacaca",
    $justifyContent: "space-between",
    $cursor: "pointer",
  },
  StH4: {
    $marginTop: "45px",
    $marginBottom: "25px",
  },
  StButton: {
    $bgColor: "rgb(255, 10, 19)",
    $width: "50px",
    $margin: "25px 0 0 0",
  },
};

export default function PokeCard({ data }) {
  const navigate = useNavigate();

  const handleNavigate = (targetId) => {
    navigate(`/detail?id=${targetId}`);
  };

  return (
    <StCard
      key={data.id}
      {...styles.StCard}
      onClick={() => handleNavigate(data.id)}
    >
      <img src={data.img_url} />
      <StH4 {...styles.StH4}>{data.korean_name}</StH4>
      <p>No. 00{data.id}</p>
      <StButton {...styles.StButton}>추가</StButton>
    </StCard>
  );
}
