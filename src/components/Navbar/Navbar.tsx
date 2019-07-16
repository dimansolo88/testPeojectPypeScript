import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className={n.navbar}>
            navbar



                <div >
                    <NavLink to="/profile" className={n.link}  activeClassName={n.r}>profile</NavLink>
                </div>

                <div>
                    <NavLink to="/dialogs" className={n.link} > message </NavLink>
                </div>

                <div>
                    <NavLink to="/news" className={n.link}> news </NavLink>
                </div>

                <div>
                    <NavLink to="/music" className={n.link} >music</NavLink>
                </div>

                <div>
                    <NavLink to="/settings" className={n.link} >settings</NavLink>
                </div>

                <div>
                    <NavLink to="/users" className={n.link} >Users</NavLink>
                </div>

        </nav>
    );
}

export default Navbar;