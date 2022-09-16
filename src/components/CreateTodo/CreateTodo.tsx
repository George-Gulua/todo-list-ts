import React, {FC, useRef, useState} from 'react';
import classes from './CreateTodo.module.css'

interface CreateTodoProps {
    createTodoItem: Function;
}

const CreateTodo:FC<CreateTodoProps> = ({ createTodoItem }) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)

    const clickValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newTodoItem = {
            id: Date.now(),
            title: titleRef.current?.value,
            body: bodyRef.current?.value
        }
        createTodoItem(newTodoItem)
    }

    return (
        <div className={classes['create-todo']}>
            <input className={classes['create-todo__input']} ref={titleRef} type="text" placeholder={"Название задачи"}/>
            <input className={classes['create-todo__input']} ref={bodyRef} type="text" placeholder={"Описание задачи"}/>
            <button className={classes['create-todo__btn']} onClick={clickValue}>Создать</button>
        </div>
    );
};

export default CreateTodo;
