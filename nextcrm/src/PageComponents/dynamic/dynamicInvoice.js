import Image from "next/image";
import AQ from "../../Assests/logo.png";
import AquaInvoiceCardLayover from "@/reusbales/invoiceCardLayover";
const AquaDyanamicInvoicesComponent = () => {
  return (
    <>
      <div className="mb-5" />
      <div className="container">
        <AquaInvoiceCardLayover>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
              <div className="text-center">
                <Image src={AQ} height="100" />
                <h4>Kundana Enterprises</h4>
                <h6>GST- 36AMUPB4451C1Z7</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
          </div>
        </AquaInvoiceCardLayover>
      </div>
    </>
  );
};

export default AquaDyanamicInvoicesComponent;
