import {getDialogsThunkCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import { withRouter } from "react-router";

class DialogsContanier extends React.Component <any> {

    componentDidMount(): void {
        this.props.getDialogs();


    }

    render() {
        // @ts-ignore
        return <Dialogs {...this.props} />
    }




}





const mapStateToProps = (state: any) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
        messageData:state.dialogspages.messagesdata,

}

};



// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         add: (message: string) => {
//             dispatch(sendMessageCreator(message));
//
//         },
//
//
//     };
// }

// let redirect = WithAthREdirect(Dialogs);
export default compose <any, any,any>  (withRouter,

connect(mapStateToProps, {getDialogs:getDialogsThunkCreator}))(DialogsContanier);


