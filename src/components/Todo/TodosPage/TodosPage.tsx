import React, { FC, useEffect, useState } from 'react';
import classes from './TodosPage.module.css'
import CreateTodo from "../../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import { Itodo } from "../../../types/Itodo";
import { useTodo } from "../../../hooks/useTodo";

const TodosPage:FC = () => {
    const [todoList, setTodoList] = useState<Itodo[]>([])
    const methods = useTodo(todoList, setTodoList)
    useEffect( () => {
        methods.getAll().then()
    }, [])

    return (
        <div className={classes['todos-page']}>
            <h1 className={ classes['todos-page__title']}>Список задач</h1>
            <CreateTodo createMethod={ methods.create } />
            <hr/>
            <TodoList todoList={ todoList } deleteMethod={ methods.delete }/>
        </div>
    );
};

export default TodosPage;
