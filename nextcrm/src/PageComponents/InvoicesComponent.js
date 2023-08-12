import AquaLayout from "@/Layout/Layout";

import AquaInput from "@/reusbales/AquaInput";
import AquaCardLayover from "@/reusbales/cardLayover";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import AquaInvoicesList from "./Dynamic/InvoiceComponents/invoiceList";

const InvoiceComponent = () => {
  const [gst, setGst] = useState(false);
  const [readMode, setReadMode] = useState(false)
  const [products, setProd] = useState([
    {
      "productName": "",
      "productQuantity": "",
      "productPrice": "",
      "productSerialNo": "",
    },
  ])
  const [data, setData] = useState({
    "customerDetails": {
      "name": "",
      "phone": "",
      "email": "",
      "address": ""
    },
    "gstDetails": {
      "gstName": "",
      "gstNo": "",
      "gstPhone": "",
      "gstEmail": "",
      "gstAddress": ""
    },
    "trasnport": {
      "deliveredBy": "",
      "deliveryDate": ""
    },
    "gst": gst,
    "products": [],
    "paidStatus": "paid",
    "paytmentType": "into band",
  })



  const AddProduct = () => {
    let productPayload = {
      "productName": "",
      "productQuantity": "",
      "productPrice": "",
      "productSerialNo": "",
    }
    setProd([...products, productPayload])
  }
  const removeProducts = (i) => {
    setProd(products.splice(1, i))
  }
  const handleProductChange = (e, i) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[i][name] = value;
    setProd(updatedProducts);
  }
  const handleInputChange = (section, field, value) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };
  const handleSubmit = () => {
    setData(data.products = products)
    console.log("gst", gst, data);
    setData({
      "customerDetails": {
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
      },
      "gstDetails": {
        "gstName": "",
        "gstNo": "",
        "gstPhone": "",
        "gstEmail": "",
        "gstAddress": ""
      },
      "trasnport": {
        "deliveredBy": "",
        "deliveryDate": ""
      },
      "gst": gst,
      "products": [],
      "paidStatus": "paid",
      "paytmentType": "into band",
    })
  };
  return (
    <>
      <AquaLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <AquaCardLayover title="Invoices" >
                <AquaInvoicesList />
              </AquaCardLayover>
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <AquaCardLayover title="Create Invoices">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => setReadMode(!readMode)}
                  />
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <h4>Customer Details</h4>
                      <hr />
                      <AquaInput
                        label={"Name"}
                        placeholder={"Enter Name"}
                        type={"name"}
                        name="name"
                        value={data.customerDetails.name}
                        handleChange={(e) => handleInputChange('customerDetails', 'name', e.target.value)}
                      />
                      <AquaInput
                        label={"Email"}
                        placeholder={"Enter Email"}
                        type={"email"}
                        name="email"
                        value={data.customerDetails.email}
                        handleChange={(e) => handleInputChange('customerDetails', 'email', e.target.value)}
                      />
                      <AquaInput
                        label={"Phone"}
                        placeholder={"Enter Phone No"}
                        type={"number"}
                        maxlength={10}
                        value={data.customerDetails.phone}
                        handleChange={(e) => handleInputChange('customerDetails', 'phone', e.target.value)}
                      />
                      <AquaInput
                        label={"Address"}
                        placeholder={"Enter Address"}
                        type={"address"}
                        value={data.customerDetails.address}
                        handleChange={(e) => handleInputChange('customerDetails', 'address', e.target.value)}
                        Address={true}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
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
                            label={"Gst Name"}
                            placeholder={"Enter Gst Name"}
                            type={"name"}
                            value={data.gstDetails.gstName}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstName', e.target.value)}
                          />
                          <AquaInput
                            label={"Gst No"}
                            placeholder={"Enter Gst No"}
                            type={"name"}
                            value={data.gstDetails.gstNo}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstNo', e.target.value)}
                          />
                          <AquaInput
                            label={"Gst PhoneNo"}
                            placeholder={"Enter Gst Phone No"}
                            value={data.gstDetails.gstPhone}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstPhone', e.target.value)}
                            type={"number"}
                          />
                          <AquaInput
                            label={"Gst Address"}
                            placeholder={"Enter Gst Address"}
                            type={"address"}
                            value={data.gstDetails.gstAddress}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstAddress', e.target.value)}
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
                      <Button className="bg-success mb-1" onClick={AddProduct}>Add Products</Button>
                      <hr />
                      {products.map((product, index) => (
                        <>
                          {index > 0 ? (<>
                            <Button className="bg-danger ms-1" onClick={() => removeProducts(index)}>Delete Product</Button>
                            <hr />
                            <div key={index}>
                              <AquaInput
                                type="text"
                                label="Product Name"
                                name="productName"
                                value={product.productName}
                                handleChange={(e) => handleProductChange(e, index)}
                                placeholder="Product Name"
                              />
                              <AquaInput
                                type="number"
                                label="Product Quantity"
                                name="productQuantity"
                                value={product.productQuantity}
                                handleChange={(e) => handleProductChange(e, index)}
                                placeholder="Quantity"
                              />
                              <AquaInput
                                type="number"
                                name="productPrice"
                                label="Product Price"
                                value={product.productPrice}
                                handleChange={(e) => handleProductChange(e, index)}
                                placeholder="Product Price"
                              />
                              <AquaInput
                                type="number"
                                label="Product Label"
                                name="productSerialNo"
                                value={product.productSerialNo}
                                handleChange={(e) => handleProductChange(e, index)}
                                placeholder="Product Serial No"
                              />
                            </div>
                          </>) : (
                            <>
                              <div key={index}>
                                <AquaInput
                                  type="text"
                                  name="productName"
                                  label="Product Name"
                                  value={product.productName}
                                  handleChange={(e) => handleProductChange(e, index)}
                                  placeholder="Product Name"
                                />
                                <AquaInput
                                  type="number"
                                  name="productQuantity"
                                  label="Product Quantity"
                                  value={product.productQuantity}
                                  handleChange={(e) => handleProductChange(e, index)}
                                  placeholder="Quantity"
                                />
                                <AquaInput
                                  type="number"
                                  name="productPrice"
                                  label="Product Price"
                                  value={product.productPrice}
                                  handleChange={(e) => handleProductChange(e, index)}
                                  placeholder="Price"
                                />
                                <AquaInput
                                  type="number"
                                  name="productSerialNo"
                                  label="Product Serial No"
                                  value={product.productSerialNo}
                                  handleChange={(e) => handleProductChange(e, index)}
                                  placeholder="Product Serial No"
                                />

                              </div>
                            </>
                          )}

                        </>

                      ))}


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
