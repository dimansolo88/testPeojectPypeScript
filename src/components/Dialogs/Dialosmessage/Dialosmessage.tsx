import React from "react";
import p from "../Dialogs.module.css";


const Dialosmessage = (props) => {
    return (
        <div className={p.message}>
            {props.message}

        </div>
    );
}


export default Dialosmessage;
