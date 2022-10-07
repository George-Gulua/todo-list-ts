import React, { FC, useRef } from 'react';
import classes from './CreateTodo.module.css';

interface createTodoProps {
    createMethod: Function
}

const CreateTodo:FC<createTodoProps> = ({ createMethod }) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)

    const clickValue = () => {
        createMethod({
            title: titleRef.current?.value,
            body: bodyRef.current?.value
        })
    }

    return (
        <div className={classes['create-todo']}>
            <input className={classes['create-todo__input']} ref={titleRef} type="text" placeholder={"Название задачи"}/>
            <input className={classes['create-todo__input']} ref={bodyRef} type="text" placeholder={"Описание задачи"}/>
            <button className={classes['create-todo__btn']} onClick={ clickValue }>Создать</button>
        </div>
    );
};

export default CreateTodo;
