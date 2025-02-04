import { StButton, StCard, StH4 } from "../style/StCommon";
export default function PokeCard({ data }) {
  return (
    <StCard
      key={data.id}
      $width="200px"
      $boxShadow="1px 3px 2px #cacaca"
      $justifyContent="space-between"
    >
      <img src={data.img_url} />
      <StH4 $marginTop="45px" $marginBottom="25px">
        {data.korean_name}
      </StH4>
      <p>No. 00{data.id}</p>
      <StButton $bgColor="rgb(255, 10, 19)" $width="50px" $margin="25px 0 0 0">
        추가
      </StButton>
    </StCard>
  );
}
