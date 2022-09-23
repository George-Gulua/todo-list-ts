import React, { FC, useState } from 'react';
import classes from './TodosPage.module.css'
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import { useFetching } from "../../hooks/useFetching";
import TodoHelper from "../../services/todo-helper";

const TodosPage:FC = () => {
    const [todoList, setTodoList] = useState([])
    useFetching(todoList, setTodoList)
/*
    const сreateTodoItem = (todoItem: never) => {
        if(todoItem) {
            const newTodoList = [...todoList, todoItem]
            setTodoList(newTodoList)
            StorageService.StorageEdit(newTodoList)
        }
    }

    const deleteTodoItemById = (todoItemId: number) => {
        const Filtered = todoList.filter(({ id }) => id !== todoItemId)
        setTodoList(Filtered)
        StorageService.StorageEdit(Filtered)
    }
    Создать хук, который возвращает
*/
    const createTodoItem = (todoItem: never) => {
        TodoHelper.createTodoItem(todoItem, todoList, setTodoList)
    }
    const deleteTodoItemById = (todoItemId: number) => {
        TodoHelper.deleteTodoItemById(todoItemId, todoList, setTodoList)
    }
    return (
        <div className={classes['todos-page']}>
            <h1 className={ classes['todos-page__title']}>Список задач</h1>
            <CreateTodo createTodoItem={ createTodoItem }/>
            <hr/>
            <TodoList todoList={ todoList } deleteTodoItemById={ deleteTodoItemById }/>
        </div>
    );
};

export default TodosPage;
