import styled, { css } from "styled-components";

const columnFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StLayout = styled.div`
  ${columnFlex}
  background-color: rgb(255, 227, 184);
  width: 100vw;
  min-height: 100vh;
  padding: 3vw;
  box-sizing: border-box;
`;

export const StContainer = styled.div`
  ${columnFlex}
  width : 100%;
`;

export const StBoard = styled.section`
  background-color: rgb(247, 247, 247);
  padding: 3vh 2vh;
  margin-bottom: ${({ $marginBottom = "0px" }) => $marginBottom};
  border-radius: 5px;
`;

export const StCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const StCard = styled.div`
  ${columnFlex}
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

export const StP = styled.p`
  width: ${({ $width = "50%" }) => $width};
  min-width: ${({ $minWidth = "300px" }) => $minWidth};
  margin-bottom: ${({ $marginBottom = "0px" }) => $marginBottom};
  text-align: center;
  word-break: keep-all;
`;

export const StButton = styled.button`
  cursor: pointer;
  background-color: ${({ $bgColor = "rgb(255, 10, 19)" }) => $bgColor};
  color: ${({ $color = "#fff" }) => $color};
  border: none;
  border-radius: 7px;
  padding: ${({ $padding = "8px 10px" }) => $padding};
  margin: ${({ $margin = "0px" }) => $margin};
  width: ${({ $width = "50px" }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const StH3 = styled.h3`
  color: ${({ $color = "rgb(255, 10, 19)" }) => $color};
  font-size: 32px;
  text-align: center;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;

export const StH4 = styled.h4`
  color: ${({ $color = "rgb(255, 10, 19)" }) => $color};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;

export const StDl = styled.dl`
  ${columnFlex}
  flex-direction: row;
  margin-bottom: 40px;
`;
