import React from "react";
import p from './Dialogs.module.css';
import Dialogitem from "./Dialogitem/Dialogitem";
import {AddMessageReduxForm} from "./FormSendMessage";
import Dialosmessage from "./Dialosmessage/Dialosmessage";


interface iprops {
    add: Function,
    state: any,
    messageData:any[]


}


const Dialogs = (props: iprops) => {

    const onSubmit = (data: any) => {
        console.log(data);
        props.add(data.dialogSendMessage)

    };


    let states = props.state;


    let dialogselements =
        states.dialogsdata.map((dialog: any) => <Dialogitem name={dialog.userName} key={dialog.id}
                                                            id={dialog.id} />);



    return (
        <div className={p.dialogs}>
            <div className={p.dialogsitems}>


                {dialogselements}


            </div>


            <div className={p.messages}>

                <Dialosmessage messageData={props.messageData} />





                <AddMessageReduxForm onSubmit={onSubmit}/>


            </div>


        </div>

    );
};


export default Dialogs;
