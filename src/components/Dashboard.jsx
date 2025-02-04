import { StBoard, StCardWrapper, StH3 } from "../style/StCommon";

import PokeBall from "./PokeBall";

export default function Dashboard() {
  return (
    <StBoard $marginBottom="20px">
      <StH3 $color="rgb(246, 12, 20)" $marginBottom="50px" $marginTop="50px">
        나만의 포켓몬
      </StH3>

      {/* @Todo myPokeList 돌려서 value가 있으면 <PokeCard /> 없으면 <PokeBall /> 반환 */}
      <StCardWrapper>
        <PokeBall />
        <PokeBall />
        <PokeBall />
        <PokeBall />
        <PokeBall />
        <PokeBall />
      </StCardWrapper>
    </StBoard>
  );
}
