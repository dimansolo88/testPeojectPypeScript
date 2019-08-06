import React from 'react';
import style from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img src="http://web-dok.ru/wp-content/uploads/OYPa6dml8d.jpg" alt="Header"/>
            header

            <div className={style.login}>



                <NavLink to={props.login ? "/profile/" : "/login"} className={style.login}>

                    {props.login ? props.login : "Login"} {/*possible to redo*/}

                    {props.login ? <button onClick={props.logOut} >log Out</button> : null}

                </NavLink>
            </div>

        </header>

    )
};


export default Header;

