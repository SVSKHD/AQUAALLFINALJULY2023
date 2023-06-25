import { combineReducers } from "redux";
//reducers
import { userReducer } from "./userReducer";
import { authDrawerReducer } from "./authDialogReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { CODReducer } from "./codReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  authDialog: authDrawerReducer,
  coupon: couponReducer,
  cod: CODReducer,
});

export default rootReducer