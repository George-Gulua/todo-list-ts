import React, {FC} from 'react';
import classes from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {Itodo} from "../../types/types";

interface TodoListProps{
    todoList: Array<Itodo>;
    deleteTodoItemById: Function;
}

const TodoList:FC<TodoListProps> = ({ todoList, deleteTodoItemById }) => {
    return (
        <div className={ classes['todo-list'] }>
            {!!todoList.length
                ? todoList.map(todoItem => (
                    <TodoItem key={ todoItem.id } item={ todoItem } deleteTodoItemById={ deleteTodoItemById } />
                ))
                :<div className={classes['todo-list__empty']}>Список задач пуст</div>
            }
        </div>
    )
};

export default TodoList;
