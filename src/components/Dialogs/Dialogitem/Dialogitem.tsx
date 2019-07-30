import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";



interface Iprops {
    avatar:any,
    id: number,
    name: string


}

const Dialogitem = (props: Iprops) => {
    return (


        <div className={style.items}>
            <img src={props.avatar} alt="avatar" className={style.avatar}/>
            <NavLink to={"/dialogs/" + props.id} className={style.link}>  {props.name} </NavLink>
        </div>
    );
};

export default Dialogitem;