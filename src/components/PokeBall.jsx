import { Card, P } from "../style/styledComponents";

export default function PokeBall() {
  return (
    <Card $flexDirection="column" $border="3px dashed rgb(205, 205, 205)">
      <P $minWidth="60px">
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          alt="pokeBall"
        />
      </P>
    </Card>
  );
}
