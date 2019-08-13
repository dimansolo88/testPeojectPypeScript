import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import { WithAthREdirect } from "../HOC/RedirectComponent";
// import {WithAthREdirect} from "../HOC/RedirectComponent";

class DialogsContanier extends React.Component {

    render() {
        // @ts-ignore
        return <Dialogs {...this.props} />
    }




}





const mapStateToProps = (state: any) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
}

};



const mapDispatchToProps = (dispatch: Function) => {
    return {
        add: (message: string) => {
            dispatch(sendMessageCreator(message));

        },


    };
}

// let redirect = WithAthREdirect(Dialogs);
export default compose <any, any,any> (

connect(mapStateToProps, mapDispatchToProps),WithAthREdirect)(DialogsContanier);


