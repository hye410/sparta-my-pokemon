import { Link } from "react-router";
import { StButton } from "../style/StCommon";
import { StHome, StImg } from "../style/StHome";

export default function Home() {
  return (
    <StHome>
      <StImg>
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="my pokemon book"
        />
      </StImg>
      <Link to="/dex">
        <StButton
          $margin={"3vh 0 0 0"}
          $width="15%"
          $minWidth="135px"
          $maxWidth="300px"
        >
          포켓몬 도감 시작하기
        </StButton>
      </Link>
    </StHome>
  );
}
