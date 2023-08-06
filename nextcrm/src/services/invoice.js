import axios from "axios"

const getInvoices = () => (
    axios.get(`/invoice`)
)

const updateInvoice = (id, data) => (
    axios.put(`/invoice?invoice=${id}`, data)
)

const getIndividualInvoice = (id)=>(
    axios.get(`/invoice?invoice=${id}`)
)


const InvoiceOperations = () => {
    return {
        getInvoices,
        getIndividualInvoice,
        updateInvoice
    }
}

export default InvoiceOperations