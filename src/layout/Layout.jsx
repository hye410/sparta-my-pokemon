import styled from "styled-components";

const StLayout = styled.div`
  background-color: rgb(255, 227, 184);
  width: 100vw;
  min-height: 100vh;
  padding: 3vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}
