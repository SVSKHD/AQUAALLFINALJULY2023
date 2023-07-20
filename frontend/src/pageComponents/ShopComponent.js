import SeoHead from "../Head/Seo";
import CommonLayout from "../Layout/CommonLayout/Layout";
import { Card } from "react-bootstrap";
const ShopComponent = () => {
  const ShopSeo = {
    title: "AquaKart | Shop All the Softeners here",
    keywords:
      "Aquakart , water softeners , water purifiers , kent , 3m , pentair",
    type: "Ecommerce",
  };
  return (
    <>
      <CommonLayout>
        <SeoHead data={ShopSeo} />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <Card>
                <Card.Body></Card.Body>
              </Card> 
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <Card>
                <Card.Body></Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  );
};
export default ShopComponent;
