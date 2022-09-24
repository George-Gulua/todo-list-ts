import React, {FC, useContext, useRef} from 'react';
import classes from './CreateTodo.module.css';
import TodoRepository from "../../API/todo-repository";
import { GlobalContext } from "../../context/global";

const CreateTodo:FC = () => {
    const { setTodoList } = useContext(GlobalContext);
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)

    const clickValue = () => {
        (async () => {
            const CreatedTodoList = TodoRepository.create({
                id: Date.now(),
                title: titleRef.current?.value,
                body: bodyRef.current?.value
            })
            setTodoList(await CreatedTodoList)
        })()
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
