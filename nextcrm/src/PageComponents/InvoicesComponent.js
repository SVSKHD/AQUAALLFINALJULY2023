import AquaLayout from "@/Layout/Layout"
import AquaCardLayover from "@/reusbales/cardLayover"

const InvoiceComponent = () => {
    return (
        <>
            <AquaLayout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                            <AquaCardLayover title="Invoices">

                            </AquaCardLayover>
                        </div>
                        <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                            <AquaCardLayover title="Create Invoices">

                            </AquaCardLayover>
                        </div>
                    </div>
                </div>
            </AquaLayout>
        </>
    )
}
export default InvoiceComponent