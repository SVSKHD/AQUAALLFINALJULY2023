import { useState } from "react"
import Image from "next/image";
import AQ from "../../Assests/logo.png";
import AquaInvoiceCardLayover from "@/reusbales/invoiceCardLayover";
import AquaLists from "@/reusbales/listedElements";
const AquaDyanamicInvoicesComponent = () => {
  const [gst, setGst] = useState(false)
  let termsAndConditions =[
    {
      title: "Transport",
      description:
        "TRANSPORT / LIFTING CHARGES WILL BE BORN BY THE CUSTOMER.",
    },
    {
      title: "Plumber",
      description:
        " PLUMBER SHOULD BE PROVIDED AT THE TIME OF INSTALLATION (OR) OUR PLUMBERS MIGHT ATTRACT PLUMBING CHARGES.",
    },
    {
      title: "Plumbing Material",
      description:
        "PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER, Plumbing MATERIAL.",
    },
    {
      title: "Electric Socket If purchased Auto Softener",
      description:
        "ONE ELECTRIC SOCKET HAS TO BE PROVIDED AT THE TIME OF INSTALLATION, IF PRESSURE BOOSTER THEN TWO ELECTRIC SOCKETS.",
    },
    {
      title: "Delivery and Installation policy",
      description:
        "DELIVERY / INSTALLATION COMPLETED WITHIN 7 WORKING DAYS. ",
    },
    { title: "Advance policy", description: "100% ADVANCE ALONG WITH PO." },
    {
      title: "Work Monitoring",
      description: "PLUMBING WORK MONITORING WILL BE DONE BY OUR ENGINEERS",
    },
  ];

  const gstValueGenerate = () => {
    let basePrice = Math.floor(Data.value.paidAmount * 0.8474594);
    let gst = Math.floor(basePrice * 0.18);
    return gst;
  };
  return (
    <>
      <div className="mb-5" />
      <div className="container">
        <AquaInvoiceCardLayover>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
              <div className="text-center">
                <Image src={AQ} height="100" alt="Aquakart" />
                <h4>Kundana Enterprises</h4>
                <h6>GST- 36AMUPB4451C1Z7</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
              <div className="">
                date : {new Date().getFullYear}
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <h3>Customer Details</h3>
          </div>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <h1>Name : </h1>
                <h3>Phone: </h3>
                <h3>Address:</h3>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                {gst ? (
                  <div>
                    <h1>GstName : </h1>
                    <h2>GstNo: </h2>
                    <h3>Phone: </h3>
                    <h3>GstAddress:</h3>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <h3>Product Details</h3>
          </div>
          <hr />
          <table class="table table-borderless text-center">
            <thead>
              <tr>
                <th scope="col">Quantity</th>
                <th scope="col">Name</th>
                <th scope="col">Base-Price</th>
                <th scope="col">GST(18%)</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
          <hr/>
          {termsAndConditions.map((r,i)=>(
            <AquaLists title={r.title} description={r.description} number={i+1}/>
          ))}
        </AquaInvoiceCardLayover>
      </div>
    </>
  );
};

export default AquaDyanamicInvoicesComponent;