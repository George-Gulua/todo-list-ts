import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={classes['nav-menu']}>
            <NavLink to={'/login'} className={classes['nav-menu__link']}>Войти</NavLink>
            <NavLink to={'/todos'} className={classes['nav-menu__link']}>Задачи</NavLink>
        </div>
    );
};

export default NavMenu;