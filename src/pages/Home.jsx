import { Link } from "react-router";
import { FlexBox, Button, P } from "../style/styledComponents";

const styles = {
  StButton: {
    $margin: "3vh 0 0 0",
    $width: "15%",
    $minWidth: "135px",
    $maxWidth: "300px",
  },
};

export default function Home() {
  return (
    <FlexBox $flexDirection="column">
      <P>
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="my pokemon book"
        />
      </P>
      <Link to="/dex">
        <Button {...styles.StButton}>포켓몬 도감 시작하기</Button>
      </Link>
    </FlexBox>
  );
}
