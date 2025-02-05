import { StCard, StP } from "../style/StCommon";

const style = {
  StCard: {
    $border: "3px dashed rgb(205, 205, 205)",
    $width: "150px",
  },
  StP: {
    $minWidth: "60px",
  },
};

export default function PokeBall() {
  return (
    <StCard {...style.StCard}>
      <StP {...style.StP}>
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          alt="pokeBall"
        />
      </StP>
    </StCard>
  );
}
