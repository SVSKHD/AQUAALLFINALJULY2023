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
        <div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
              <Card>
                <Card.Body></Card.Body>
              </Card> 
            </div>
            <div className="col-md-9 col-lg-9 col-xs-12 col-sm-12">
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
