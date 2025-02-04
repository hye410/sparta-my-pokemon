import styled from "styled-components";

export const StButton = styled.button`
  cursor: pointer;
  background-color: rgb(213, 6, 12);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
`;
