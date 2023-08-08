import InvoiceOperations from "@/services/invoice"
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"

const AquaInvoicesList = () => {
    const [invoices, setInvoices] = useState([])
    const { getInvoices } = InvoiceOperations()
    useEffect(() => {
        getInvoices().then((res) => {
            setInvoices(res.data)
        })
            .catch((err) => {
                alert(err)
            })
    }, [])
    return (
        <>
            {invoices.map((r, i) => (
                <Card key={i} className="m-3 shadow-lg">
                    <Card.Body>
                        <Card.Title>{r.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            ))}

        </>
    )
}
export default AquaInvoicesList