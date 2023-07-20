import PageWrapper from "../../transition/transition";
import AquaFooter from "./Footer";
import AquaNav from "./Nav";
import { Container } from "react-bootstrap";

const CommonLayout = (props) => {
  return (
    <>
      <AquaNav />
      <PageWrapper>
      <Container fluid>{props.children}</Container>
      </PageWrapper>
      <AquaFooter/>
    </>
  );
};
export default CommonLayout;
