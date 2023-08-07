import AquaLayout from "@/Layout/Layout";
import AquaInput from "@/reusbales/AquaInput";
import AquaCardLayover from "@/reusbales/cardLayover";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import InvoiceOperations from "@/services/invoice";

const InvoiceComponent = () => {
  const [gst, setGst] = useState(false);
  const { getInvoices } = InvoiceOperations();
  useEffect(() => {
    getInvoices().then((res) => {
      console.log("invoices", res);
    });
  });
  const handleSubmit = () => {
    console.log("gst", gst);
  };
  return (
    <>
      <AquaLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <AquaCardLayover title="Invoices"></AquaCardLayover>
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <AquaCardLayover title="Create Invoices">
                <form>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <h4>Customer Details</h4>
                      <hr />
                      <AquaInput
                        label={"Name"}
                        placeholder={"Enter Name"}
                        type={"name"}
                      />
                      <AquaInput
                        label={"Phone"}
                        placeholder={"Enter Phone No"}
                        type={"number"}
                      />
                      <AquaInput
                        label={"Address"}
                        placeholder={"Enter Address"}
                        type={"address"}
                        Address={true}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onChange={() => setGst(!gst)}
                        />
                      </div>
                      {gst ? (
                        <>
                          <h4>GST Details</h4>
                          <hr />
                          <AquaInput
                            label={"Gst-Name"}
                            placeholder={"Enter Gst Name"}
                            type={"name"}
                          />
                          <AquaInput
                            label={"Gst-No"}
                            placeholder={"Enter Gst No"}
                            type={"name"}
                          />
                          <AquaInput
                            label={"Gst-Phone-No"}
                            placeholder={"Enter Gst Phone No"}
                            type={"number"}
                          />
                          <AquaInput
                            label={"Gst-Address"}
                            placeholder={"Enter Gst Address"}
                            type={"address"}
                            Address={true}
                          />
                        </>
                      ) : (
                        <>
                          <h4>Switch toggle for Gst details entry</h4>
                        </>
                      )}
                    </div>
                  </div>
                  <hr />
                  <h3 className="text-center">Product & Transit Details</h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <AquaInput
                        label={"Product Name"}
                        placeholder={"Enter Product Name"}
                        type={"name"}
                      />
                      <AquaInput
                        label={"Product Price"}
                        placeholder={"Enter Product Price"}
                        type={"number"}
                      />
                      <AquaInput
                        label={"Product Quantity"}
                        placeholder={"Enter Product Quantity"}
                        type={"number"}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <AquaInput
                        label={"Delivery Status"}
                        placeholder={"Enter Delivery Status"}
                        type={"name"}
                      />
                      <AquaInput
                        label={"Delivery Date and time"}
                        placeholder={"Enter Delivery date and time"}
                        type={"number"}
                      />
                      <AquaInput
                        label={"Transfer Type"}
                        placeholder={"Enter Transfer Type"}
                        type={"name"}
                      />
                    </div>
                  </div>
                </form>
                <div className="d-grid gap-2">
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </AquaCardLayover>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default InvoiceComponent;
