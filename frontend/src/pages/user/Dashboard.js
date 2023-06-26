import DashboardLayout from "../../Layout/Dashboard/DashboardLayout"
import {Card} from "react-bootstrap"

const UserDashoard = () =>{
return(
    <>
    <DashboardLayout>
    <Card className="shadow-lg p-3">
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </DashboardLayout>
    </>
)
}
export default UserDashoard