// import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
// import {WithAthREdirect} from "../HOC/RedirectComponent";



const mapStateToProps = (state) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
}

};



const mapDispatchToProps = (dispatch) => {
    return {
        add: (message) => {
            dispatch(sendMessageCreator(message));

        },
        changemess: (text) => {
                   dispatch(updateMessageCreator(text))
                }

    }

};


// let redirect = WithAthREdirect(Dialogs);


const DialogsContanier = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContanier;
