import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./Auth-reducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({

    profilepage: profileReducer,
    dialogspages: dialoReducer,
    usersPages: userReducer,
    auth: authReducer,
    form: formReducer


});


let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;


export default store;










