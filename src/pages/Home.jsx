import { Link } from "react-router";
import { StButton, StImg } from "../style/StCommon";
import { StHome } from "../style/StHome";

export default function Home() {
  return (
    <StHome>
      <StImg $width="50%" $minWidth="300px">
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
          $bgColor="rgb(213, 6, 12)"
        >
          포켓몬 도감 시작하기
        </StButton>
      </Link>
    </StHome>
  );
}
