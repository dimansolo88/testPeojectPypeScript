import {profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

let set_AuthMe = "SET-AUTH-ME";


let initialstate = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,


};


const authReducer = (state = initialstate, action: any) => {


    switch (action.type) {
        case set_AuthMe:
            return {
                ...state,
                ...action.payload,
                // isAuth: action.payload,

            };

        default:
            return state;


    }
};


export const authMe = (userId: any, email: any, login: any,isAuth:boolean ) => ({type: set_AuthMe,
    payload: {userId, email,
        login}, isAuth});


export const auhMeThunkCreator = () => {
    return (dispatch: Function) => {
        profileAPI.authMe()
            .then(response => {
                let {id, email, login} = response.data.data;
                if (response.data.resultCode === 0) {
                    dispatch(authMe(id, email, login, true));

                }

            })

    }
};

export const loginThunkCreator = (email:string, password:string, rememberMe:boolean) => (dispatch: Function) => {
    profileAPI.logIn(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auhMeThunkCreator())
            }
            else {
                let messageError = response.data.messages;
                dispatch(stopSubmit("login", {_error: messageError.length > 0
                ? messageError [0] : "some error"}))
            }


        })
};


export const logOutThunkCreator = () => (dispatch: Function) => {
    profileAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(authMe(null, null,null,false))
            }
        })
};




export default authReducer;

