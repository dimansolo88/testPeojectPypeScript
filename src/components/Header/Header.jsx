import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className ={style.header}>
            <img src= "http://web-dok.ru/wp-content/uploads/OYPa6dml8d.jpg" alt="Header"  />
            header

           <div className={style.login}>


               <NavLink to={ props.isAuth ? "/profile/" : "/login"}  className={style.login}>

                   {props.isAuth ? props.login : "Login"}  {/*possible to redo*/}



               </NavLink>
           </div>

        </header>

    )
};


export default Header;

