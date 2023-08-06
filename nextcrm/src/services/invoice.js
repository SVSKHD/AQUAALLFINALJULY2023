import axios from "axios"

const BaseUrl = process.env.API
const getInvoices = () => (
    axios.get(`${BaseUrl}/invoice`)
)

const updateInvoice = (id, data) => (
    axios.put(`${BaseUrl}/invoice?invoice=${id}`, data)
)

const getIndividualInvoice = (id)=>(
    axios.get(`${BaseUrl}/invoice?invoice=${id}`)
)


const InvoiceOperations = () => {
    return {
        getInvoices,
        getIndividualInvoice,
        updateInvoice
    }
}

export default InvoiceOperations