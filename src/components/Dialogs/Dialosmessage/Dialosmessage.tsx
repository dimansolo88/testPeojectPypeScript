import React from "react";
import p from "../Dialogs.module.css";



interface Iprops {

    message: string,

}

const Dialosmessage = (props: Iprops) => {

    return (
        <div className={p.message}>
            {props.message}

        </div>
    );
};


export default Dialosmessage;
