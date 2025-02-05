import { Link } from "react-router";
import { StContainer, StButton, StP } from "../style/StCommon";

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
    <StContainer>
      <StP>
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="my pokemon book"
        />
      </StP>
      <Link to="/dex">
        <StButton {...styles.StButton}>포켓몬 도감 시작하기</StButton>
      </Link>
    </StContainer>
  );
}
