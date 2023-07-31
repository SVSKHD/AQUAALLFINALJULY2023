import { Card } from "react-bootstrap"
import { FaShoppingBag, FaHeart } from "react-icons/fa"
import { FaArrowRightFromBracket } from "react-icons/fa6"
const UserCard = (user) => {
    let UserDetails = JSON.parse(user.user)
    return (
        <>
            <Card className="user-card text-white mb-4">
                <Card.Body>
                    <div className="m-1 ">
                        <Card.Subtitle className="text-center">Welcome Back</Card.Subtitle>
                        <Card.Title className="user-card-name text-center">{UserDetails?UserDetails.name:"Aquakart"}</Card.Title>
                    </div>
                    <Card.Body className="bg-white user-card-body text-center">
                        <Card.Link href={`/user/dashboard/${UserDetails}/shopping-bag`} className="text-dark"><FaShoppingBag size={25} /></Card.Link>
                        <Card.Link href={`/user/dashboard/${UserDetails}/favourites`} className="text-danger"><FaHeart size={25} /></Card.Link>
                        <Card.Link className="text-danger"><FaArrowRightFromBracket size={25} /></Card.Link>

                    </Card.Body>
                    <div></div>


                </Card.Body>
            </Card>
        </>
    )
}
export default UserCard