import React from "react";
import p from "../Dialogs.module.css";



interface Iprops {
    messageData:any[]



}

const Dialosmessage = (props: Iprops) => {

    return (
        <div className={p.message}>

            <div>
                messages
            </div>

            {props.messageData.map((mess: { body:string, id: number }) => <div key={mess.id}>
                <div>
                    {mess.body}

                </div>


                </div>
            )}



        </div>
    );
};


export default Dialosmessage;
