import '@/styles/globals.css'
import { Provider } from "react-redux"
import { wrapper } from "../Store/store"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
