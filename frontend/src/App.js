import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import HomeView from "./pages/Home";
import ShopView from "./pages/shop";
import ServiceView from "./pages/services";
import CompareView from "./pages/compare";
import CartView from "./pages/cart";
import NotFound from "./pages/404Not-Found";

//user
import UserDashoard from "./pages/user/Dashboard";
import UserCouponView from "./pages/user/coupon";
import UserDashboardProfileView from "./pages/user/profile";
import UserOrderView from "./pages/user/orders";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthDialog from "./components/AuthDialog/AuthDialog";

//Store
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { authDialog } = useSelector((state) => ({ ...state }));
  const AquaRoutes = [
    {
      path: "/",
      name: "Home",
      component: <HomeView />,
    },
    {
      path: "/shop",
      name: "Shop",
      component: <ShopView />,
    },
    {
      path: "/compare",
      name: "Compare",
      component: <CompareView />,
    },
    {
      path: "/cart",
      name: "Cart",
      component: <CartView />,
    },
    {
      path: "/service",
      name: "Service",
      component: <ServiceView />,
    },
    {
      path: "/user/dashboard/:name",
      name: "User-Dashboard",
      component: <UserDashoard />
    },
    {
      path: "/user/dashboard/coupons",
      name: "User-Coupons",
      component: <UserCouponView />
    },
    {
      path: "/user/dashboard/profile",
      name: "User-Profile",
      component: <UserDashboardProfileView />
    },
    {
      path: "/user/dashboard/orders",
      name: "User-Order",
      component: <UserOrderView />
    },
    {
      path: "*",
      name: "Not-Found",
      component: <NotFound />,
    },

  ];
  return (
    <>
      <AuthDialog
        show={authDialog}
        hide={() =>
          dispatch({
            type: "SET_AUTH_DRAWER_VISIBLE",
            payload: false,
          })
        }
      />
      <Router>
        <Routes>
          {AquaRoutes.map((r, i) => (
            <Route path={r.path} key={r.name} element={r.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
