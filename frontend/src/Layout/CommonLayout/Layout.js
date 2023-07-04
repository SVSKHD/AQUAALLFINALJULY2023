import AquaFooter from "./Footer";
import AquaNav from "./Nav";
import { Container } from "react-bootstrap";

const CommonLayout = (props) => {
  return (
    <>
      <AquaNav />
      <Container fluid>{props.children}</Container>
      <AquaFooter/>
    </>
  );
};
export default CommonLayout;
