import axios from "axios";

let baseUrl = process.env.API_URL;

const getInvoices = () => axios.get(`api/invoice`);

const updateInvoice = (id, data) =>
  axios.put(`api/invoice?invoice=${id}`, data);

const getIndividualInvoice = (id) =>
  axios.get(`http://localhost:3000/api/invoice?invoice=${id}`);

const InvoiceOperations = () => {
  return {
    getInvoices,
    getIndividualInvoice,
    updateInvoice,
  };
};

export default InvoiceOperations;
