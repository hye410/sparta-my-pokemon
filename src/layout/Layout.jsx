import styled from "styled-components";

const StLayout = styled.div`
  background-color: rgb(255, 227, 184);
  width: 100vw;
  height: 100vh;
`;

export default function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}
