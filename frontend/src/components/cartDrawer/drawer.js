import AqDrawer from "../../reusables/Drawer"
import {useSelector , useDispatch} from "react-redux"
import CartCard from "../cards/reusables/cartCard"

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
                <CartCard/>
            </AqDrawer>
        </>
    )
}
export default CartDrawer