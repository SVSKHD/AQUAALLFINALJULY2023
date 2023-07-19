import { Provider, useSelector, useDispatch } from "react-redux";
import AuthDialog from "../auth/authDialog";
import { wrapper } from "../Store/store";
import { Toaster } from "react-hot-toast"


import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const dispatch = useDispatch()
  const { AuthDialog } = useSelector((state) => ({ ...state }))
  return (
    <>
      <Provider store={store}>
        <AuthDialog show={AuthDialog} close={() => dispatch({
          type: "SET_AUTH_DIALOG_VISIBLE",
          payload: false,
        })} />
        <Toaster
          position="bottom-center"
          reverseOrder={true}
        />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
