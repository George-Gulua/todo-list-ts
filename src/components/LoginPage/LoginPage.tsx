import React, {useContext, useEffect, useState} from 'react';
import classes from './LoginPage.module.css'
import { GlobalContext } from "../../context/global";

const LoginPage = () => {
    const { setIsAuth } = useContext(GlobalContext);
    const [hasError, setHasError] = useState(false)
    if(hasError) {
        throw Error('Упс ошибка...')
    }
    const login = () => {
        setIsAuth(true)
    }
    return (
        <div className={classes['login-form']}>
            <h2 className={classes['login-form__title']}>Вход</h2>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите логин'}/>
            <input className={classes['login-form__input']} type="text" placeholder={'Введите пароль'}/>
            <button className={classes['login-form__btn']} onClick={ login }>Войти</button>
            <button className={classes['login-form__btn']} onClick={() => {setHasError(true)}}>Вызвать ошибку</button>
        </div>
    );
};

export default LoginPage;
