import React, {FC, useEffect, useState} from 'react';
import TodoRepository from "../../API/todo-repository";
import classes from './TodosPage.module.css'
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";

const TodosPage:FC = () => {
    useEffect(() => {
        if(!localStorage.getItem('todo-list')) {
            localStorage.setItem('todo-list', JSON.stringify([]))
        }
        fetchTodo()
    }, [])

    const [todoList, setTodoList] = useState([])

    const fetchTodo = async () => {
        let fetchData = JSON.parse(localStorage.getItem('todo-list') || '{}')

        if(JSON.parse(localStorage.getItem('todo-list') || '{}').length === 0) {
            fetchData = await TodoRepository.fetch()
        }
        setTodoList(fetchData)
    }

    const CreateTodoItem = (todoItem: never) => {
        if(todoItem) {
            setTodoList([...todoList, todoItem])
            localStorage.setItem('todo-list', JSON.stringify(todoList))
        }
    }

    const deleteTodoItemById = (todoItemId: number) => {
        setTodoList(todoList.filter(({ id }) => id !== todoItemId))
        localStorage.setItem('todo-list', JSON.stringify(todoList))
    }

    return (
        <div className={classes['todos-page']}>
            <h1 className={ classes['todos-page__title']}>Список задач</h1>
            <CreateTodo createTodoItem={CreateTodoItem}/>
            <hr/>
            <TodoList todoList={ todoList } deleteTodoItemById={ deleteTodoItemById }/>
        </div>
    );
};

export default TodosPage;