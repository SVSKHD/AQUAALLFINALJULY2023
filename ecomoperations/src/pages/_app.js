import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { Provider, useDispatch  , useSelector} from 'react-redux';
import rootReducer from '@/Store/reducers';
import { createStore } from 'redux';
import { Toaster } from 'react-hot-toast';
import AquaAuthDialog from '@/components/Auth/AuthDialogComponents/AuthDialog';


const Store = createStore(rootReducer)


const App = ({ Component, pageProps }) => {
  return (
    <>
    <Provider store={Store}>
      <Toaster
        position="bottom-center"
        reverseOrder={true}
      />
     <AquaAuthDialog/>
      <Component {...pageProps} />)
    </Provider>
  </>
  )
}

export default App


