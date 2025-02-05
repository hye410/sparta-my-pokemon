import { StCard, StP } from "../style/StCommon";

export default function PokeBall() {
  return (
    <StCard $border="3px dashed rgb(205, 205, 205)">
      <StP $minWidth="60px">
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          alt="pokeBall"
        />
      </StP>
    </StCard>
  );
}
