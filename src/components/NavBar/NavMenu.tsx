import React, { FC, useContext } from 'react';
import { NavLink } from "react-router-dom";
import classes from './NavMenu.module.css'
import { GlobalContext } from "../../context/global";

const NavMenu = () => {
    const { isAuth, setIsAuth } = useContext(GlobalContext);

    const logout = () => {
        setIsAuth(false)
    }
    return (
        isAuth
            ?
            <div className={classes['navbar']}>
                <div className={classes['nav-menu']}>
                    <NavLink to={'/login'} className={classes['nav-menu__link']} onClick={logout}>Выйти</NavLink>
                    <NavLink to={'/todos'} className={classes['nav-menu__link']}>Задачи</NavLink>
                </div>
            </div>
            :
            <div className={classes['navbar']}>
                <div className={classes['nav-menu']}>
                    <NavLink to={'/login'} className={classes['nav-menu__link']}>Войти</NavLink>
                    <NavLink to={'/todos'} className={classes['nav-menu__link']}>Задачи</NavLink>
                </div>
            </div>
    );
};

export default NavMenu;
