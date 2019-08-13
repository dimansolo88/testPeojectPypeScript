import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./Auth-reducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";




let reducers = combineReducers({

    profilepage: profileReducer,
    // @ts-ignore
    dialogspages: dialoReducer,
    // @ts-ignore
    usersPages: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,



});




let store: any = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store



export default store;










