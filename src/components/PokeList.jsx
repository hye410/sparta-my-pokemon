import MOCK_DATA from "../data/mockData";
import { StBoard, StCardWrapper } from "../style/StCommon";
import PokeCard from "./PokeCard";

export default function PokeList() {
  return (
    <StBoard>
      <StCardWrapper>
        {MOCK_DATA.map((data) => (
          <PokeCard key={`pokemonCard_${data.id}`} data={data} />
        ))}
      </StCardWrapper>
    </StBoard>
  );
}
