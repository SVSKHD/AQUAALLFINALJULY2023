// store/reducers/index.js
import { combineReducers } from 'redux';
//reducers
import { authDialogReducer } from "./authDialogReducer";
import {authStatusReducer} from "./authStatusReducer"
const rootReducer = combineReducers({
    authDialog: authDialogReducer,// Combine your reducers here
    authStatus:authStatusReducer
});

export default rootReducer;
