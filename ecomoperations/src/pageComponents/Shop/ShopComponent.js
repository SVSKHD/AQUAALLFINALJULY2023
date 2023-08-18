import AquaLayout from "@/components/Layout/AquaLayout"
import { Card } from "react-bootstrap"
const AquaShopComponent = () => {
    return (
        <>
        <AquaLayout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card className="shadow-lg">
                            <Card.Body>
                                <h1>SHop filters</h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="shadow-lg">
                            <Card.Body>
                                <h1>Shop Products</h1>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            </AquaLayout>
        </>
    )
}
export default AquaShopComponent