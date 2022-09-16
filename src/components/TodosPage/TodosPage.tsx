import React, {FC, useEffect, useState} from 'react';
import classes from './TodosPage.module.css'
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import StorageService from "../../services/local-storage";

const TodosPage:FC = () => {
    useEffect(() => {
        StorageService.StorageInitialization(todoList)
        fetchTodo()
    }, [])

    const [todoList, setTodoList] = useState([])

    const fetchTodo = () => {
        StorageService.StorageFetching().then(todoList => {
            setTodoList(todoList)
        })
    }

    const CreateTodoItem = (todoItem: never) => {
        if(todoItem) {
            setTodoList([...todoList, todoItem])
            StorageService.StorageEdit(todoList)
        }
    }

    const deleteTodoItemById = (todoItemId: number) => {
        setTodoList(todoList.filter(({ id }) => id !== todoItemId))
        StorageService.StorageEdit(todoList)
    }

    return (
        <div className={classes['todos-page']}>
            <h1 className={ classes['todos-page__title']}>Список задач</h1>
            <CreateTodo createTodoItem={ CreateTodoItem }/>
            <hr/>
            <TodoList todoList={ todoList } deleteTodoItemById={ deleteTodoItemById }/>
        </div>
    );
};

export default TodosPage;