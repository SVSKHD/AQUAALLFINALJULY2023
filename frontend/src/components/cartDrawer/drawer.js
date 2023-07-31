import AqDrawer from "../../reusables/Drawer"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import CartCard from "../cards/reusables/cartCard"
import UserCard from "../cards/reusables/userCard"

const CartDrawer = (props) => {
    const dispatch = useDispatch()
    const { cart, user } = useSelector((state) => ({ ...state }))
    return (
        <>
            <AqDrawer
                title={props.title}
                show={props.show}
                hide={props.hide}
                placement={props.placement}
            >
                <div className="mb-4">
                    {user ? <UserCard user={user} /> : (
                        <>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" onClick={() => {
                                    dispatch({
                                        type: "SET_AUTH_DRAWER_VISIBLE",
                                        payload: true,
                                    })
                                }}>
                                    Login
                                </Button>

                            </div>
                        </>
                    )}
                </div>

                <h4>Cart</h4>
                <hr />
                <CartCard />
            </AqDrawer>
        </>
    )
}
export default CartDrawer