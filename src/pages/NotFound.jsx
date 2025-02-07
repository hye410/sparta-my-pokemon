import { useNavigate } from "react-router";
import { Button, FlexBox, H1 } from "../style/styledComponents";

export default function NotFound() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <FlexBox $flexDirection="column">
      <H1>Page not found</H1>
      <Button
        $width="300px"
        $color="#fff"
        $padding="20px 50px"
        $bgColor="rgb(26,26,26)"
        onClick={goToHome}
      >
        처음으로 돌아가기
      </Button>
    </FlexBox>
  );
}
