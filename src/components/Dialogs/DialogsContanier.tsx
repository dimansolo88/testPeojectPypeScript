import {
    getDialogsThunkCreator,
    startDialogThunkCreator,
    selectDialogActionCreator,
    getMessagesThunkCreator,
    sendMessageThunkCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import { withRouter } from "react-router";
import {getSelectDialogId} from "../../redux/Selectors/DialogsSelector";

class DialogsContanier extends React.Component <any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!!userId) {
            this.props.startDialog(userId);
            this.props.getMessages(userId);
            this.props.stSelectDialog(userId);

        }

        this.props.getDialogs();



    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            if (!!userId) {
                // this.props.startDialog(userId);

                this.props.getMessages(userId);
                this.props.stSelectDialog(userId);


            }
            else {
                this.props.stSelectDialog(null)
            }


        }
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
        // selectDialogID:state.dialogspages.selectDialogID,
        selectDialogID: getSelectDialogId(state)

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

connect(mapStateToProps, {getDialogs:getDialogsThunkCreator,
    startDialog: startDialogThunkCreator, stSelectDialog:selectDialogActionCreator,
    getMessages:getMessagesThunkCreator, sendMessage:sendMessageThunkCreator}))(DialogsContanier);


