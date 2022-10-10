import React, { FC } from 'react';
import classes from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {Itodo} from "../../../types/Itodo";

interface todoListProps {
    todoList: Itodo[]
    deleteMethod: Function
}

const TodoList:FC<todoListProps> = ({ todoList, deleteMethod}) => {
    return (
        <div className={ classes['todo-list'] }>
            {!!todoList.length
                ? todoList.map(todoItem => (
                    <TodoItem key={ todoItem._id } item={ todoItem } deleteMethod={ deleteMethod } />
                ))
                :<div className={classes['todo-list__empty']}>Список задач пуст</div>
            }
        </div>
    )
};

export default TodoList;
