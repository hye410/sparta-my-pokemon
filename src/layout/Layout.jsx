import { FlexLayout } from "../style/styledComponents";

export default function Layout({ children }) {
  return <FlexLayout $flexDirection="column">{children}</FlexLayout>;
}
