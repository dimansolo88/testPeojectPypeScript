import React from "react";
import p from './Dialogs.module.css';
import Dialogitem from "./Dialogitem/Dialogitem";
import Dialosmessage from "./Dialosmessage/Dialosmessage";
import {AddMessageReduxForm} from "./FormSendMessage";


interface iprops {
    add: Function,
    state: any,


}


const Dialogs = (props: iprops) => {

    const onSubmit = (data: any) => {
        console.log(data);
        props.add(data.dialogSendMessage)

    };


    let states = props.state;


    let dialogselements =
        states.dialogsdata.map((dialog: any) => <Dialogitem name={dialog.name} key={dialog.id}
                                                            id={dialog.id} avatar={dialog.avatar}/>);


    let messageelements =
        states.messagesdata.map((mess: { message: string; id: number }) => <Dialosmessage message={mess.message}
                                                                                          key={mess.id}/>);


    return (
        <div className={p.dialogs}>
            <div className={p.dialogsitems}>


                {dialogselements}


            </div>


            <div className={p.messages}>


                {messageelements}


                <AddMessageReduxForm onSubmit={onSubmit}/>


            </div>


        </div>

    );
};


export default Dialogs;
