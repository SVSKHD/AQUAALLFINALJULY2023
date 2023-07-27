import { combineReducers } from "redux";
//reducers
import { userReducer } from "./userReducer";
import { authDrawerReducer } from "./authDialogReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { CODReducer } from "./codReducer";
import { cartDrawerReducer } from "./cartDrawerReducer";
import { authStatusReducer } from "./authStatusReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  authDialog: authDrawerReducer,
  cartDrawer: cartDrawerReducer,
  coupon: couponReducer,
  cod: CODReducer,
  SignupStatus: authStatusReducer,
});

export default rootReducer;
