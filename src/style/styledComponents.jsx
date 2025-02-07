import styled, { css } from "styled-components";

const colors = {
  red: "rgb(255, 10, 19)",
};

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const title = css`
  text-align: center;
  font-weight: bold;
`;

const { red } = colors;

export const FlexBox = styled.div`
  ${flex}
  justify-content: ${(props) => props.$justifyContent || "center"};
  flex-wrap: ${(props) => props.$flexWrap || "nowrap"};
  flex-direction: ${(props) => props.$flexDirection || "row"};
  margin-bottom: ${(props) => props.$marginBottom};
  width: ${(props) => props.$width};
`;

export const FlexLayout = styled(FlexBox)`
  background-color: rgb(255, 227, 184);
  width: 100vw;
  min-height: 100vh;
  padding: 3vw;
  box-sizing: border-box;
`;

export const Article = styled.article`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Card = styled(FlexBox)`
  border: ${({ $border = "none" }) => $border};
  background-color: rgb(254, 254, 254);
  padding: 35px;
  margin: 10px;
  width: ${({ $isAdd }) => ($isAdd ? "200px" : "150px")};
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: ${({ $boxShadow = "none" }) => $boxShadow};
  cursor: ${({ $cursor = "auto" }) => $cursor};
`;

export const Board = styled.section`
  background-color: rgb(247, 247, 247);
  padding: 3vh 2vh;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  border-radius: 5px;
`;

export const P = styled.p`
  width: ${({ $width }) => $width || "50%"};
  min-width: ${({ $minWidth }) => $minWidth || "300px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  text-align: center;
  word-break: keep-all;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor || red};
  color: ${({ $color }) => $color || "#fff"};
  border: none;
  border-radius: 7px;
  padding: ${({ $padding }) => $padding || "8px 10px"};
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width || "50px"};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const H1 = styled.h1`
  ${title}
  font-size: 150px;
  margin-bottom: 60px;
`;

export const H3 = styled.h3`
  ${title}
  color: ${({ $color }) => $color || red};
  font-size: 32px;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;

export const H4 = styled.h4`
  ${title}
  color: ${({ $color }) => $color || red};
  font-size: 18px;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;

export const Dl = styled.dl`
  ${flex}
  margin-bottom: 40px;
`;
