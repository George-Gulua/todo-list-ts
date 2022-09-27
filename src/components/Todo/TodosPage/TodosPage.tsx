import React, { FC, useContext, useEffect } from 'react';
import classes from './TodosPage.module.css'
import CreateTodo from "../../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import TodoRepository from "../../../API/todo-repository";
import { GlobalContext } from "../../../context/global";



const TodosPage:FC = () => {
    const { setTodoList } = useContext(GlobalContext);
    useEffect(   () => {
        (async () => {
            setTodoList(await TodoRepository.fetch())
        })()
    }, [setTodoList])

    return (
        <div className={classes['todos-page']}>
            <h1 className={ classes['todos-page__title']}>Список задач</h1>
            <CreateTodo />
            <hr/>
            <TodoList />
        </div>
    );
};

export default TodosPage;
