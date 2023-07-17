import AquaCommonLayout from "@/Layout/CommonLayout"
import { Card } from "react-bootstrap"

const ShopPageComponent = () => {
    return (
        <AquaCommonLayout>

            <div className="row">
                <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h2>Shop</h2>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h2>Products</h2>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </AquaCommonLayout>
    )
}
export default ShopPageComponent