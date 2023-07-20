import { Provider } from "react-redux";
import { wrapper } from "../Store/store";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <Provider store={store}>
        <Toaster position="bottom-center" reverseOrder={true} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
