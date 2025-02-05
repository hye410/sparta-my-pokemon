import { useNavigate } from "react-router";
import { StButton } from "../style/StCommon";
import { StNotFoundTitle, StNotFoundWrapper } from "../style/StNotFound";

export default function NotFound() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <StNotFoundWrapper>
      <StNotFoundTitle>Page not found</StNotFoundTitle>
      <StButton
        $color="#fff"
        $padding="20px 50px"
        $bgColor="rgb(26,26,26)"
        onClick={goToHome}
      >
        처음으로 돌아가기
      </StButton>
    </StNotFoundWrapper>
  );
}
