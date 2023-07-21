import AqDrawer from "../../reusables/Drawer"
import {useSelector , useDispatch} from "react-redux"
import CartCard from "../cards/reusables/cartCard"
import UserCard from "../cards/reusables/userCard"

const CartDrawer = (props) => {
    const dispatch = useDispatch()
    const {cart} = useSelector((state)=>({...state}))
    return (
        <>
            <AqDrawer
                title={props.title}
                show={props.show}
                hide={props.hide}
                placement={props.placement}
            >
                <UserCard/>
                <h4>Cart</h4>
                <hr/>
                <CartCard/>
            </AqDrawer>
        </>
    )
}
export default CartDrawer