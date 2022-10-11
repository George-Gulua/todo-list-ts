import React, { FC } from 'react';
import classes from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {ITodo} from "../../../types/ITodo";

interface todoListProps {
    todoList: ITodo[]
    deleteMethod: Function
}

const TodoList:FC<todoListProps> = ({ todoList, deleteMethod}) => {
    return (
        <div className={ classes['todo-list'] }>
            {!!todoList.length
                ? todoList.map(todoItem => (
                    <TodoItem key={ todoItem.id } item={ todoItem } deleteMethod={ deleteMethod } />
                ))
                :<div className={classes['todo-list__empty']}>Список задач пуст</div>
            }
        </div>
    )
};

export default TodoList;
