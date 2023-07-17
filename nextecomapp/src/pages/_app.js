import { Provider } from "react-redux"
import { wrapper } from "../Store/store"
import {SessionProvider} from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import {useSession , signIn , signOut} from "next-auth/react"
const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <Provider store={store}>
         <SessionProvider> 
            <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  )
}

export default App
