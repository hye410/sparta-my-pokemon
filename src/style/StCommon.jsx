import styled from "styled-components";

export const StImg = styled.p`
  width: ${({ $width }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
`;

export const StButton = styled.button`
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor};
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 8px 10px;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const StBoard = styled.section`
  background-color: rgb(247, 247, 247);
  padding: 3vh 2vh;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  border-radius: 5px;
`;

export const StCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const StCard = styled.div`
  border: ${({ $border }) => $border};
  background-color: rgb(254, 254, 254);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  margin: 10px;
  width: ${({ $width }) => $width};
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  flex-direction: column;
`;

export const StH3 = styled.h3`
  color: ${({ $color }) => $color};
  font-size: 32px;
  text-align: center;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;

export const StH4 = styled.h4`
  color: ${({ $color }) => $color};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
`;
