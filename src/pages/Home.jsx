import { useNavigate } from "react-router";
import { Button, FlexBox, P } from "../style/styledComponents";

export default function Home() {
  const navigate = useNavigate();

  const goToPokemonBook = () => {
    navigate("/dex");
  };

  return (
    <FlexBox $flexDirection="column" $width="100%">
      <P>
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="my pokemon book"
        />
      </P>
      <Button
        $margin="3vh 0 0 0"
        $width="15%"
        $minWidth="135px"
        $maxWidth="300px"
        onClick={goToPokemonBook}
      >
        포켓몬 도감 시작하기
      </Button>
    </FlexBox>
  );
}
