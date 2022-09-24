import React, {useContext} from 'react';
import classes from './LoginPage.module.css'
import { GlobalContext } from "../../context/global";

const LoginPage = () => {
    const { setIsAuth } = useContext(GlobalContext);

    const login = () => {
        setIsAuth(true);
    }

    return (
        <div className={classes['login-form']}>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите логин'}/>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите пароль'}/>
            <button className={classes['login-form__btn']} onClick={login}>Войти</button>
        </div>
    );
};

export default LoginPage;
