import React from 'react';
import classes from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={classes['login-form']}>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите логин'}/>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите пароль'}/>
            <button className={classes['login-form__btn']}>Войти</button>
        </div>
    );
};

export default LoginPage;