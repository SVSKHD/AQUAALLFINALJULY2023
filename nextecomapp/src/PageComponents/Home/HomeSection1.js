import { Card } from "react-bootstrap";
const HomeSection1 = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12"></div>
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
          <Card className="shadow-lg" border="light">
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default HomeSection1;
