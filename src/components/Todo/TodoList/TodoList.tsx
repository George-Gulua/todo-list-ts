import React, {FC, useContext} from 'react';
import classes from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import { Itodo } from "../../../types/types";
import {GlobalContext} from "../../../context/global";

const TodoList:FC = () => {
    const { todoList } = useContext(GlobalContext);
    return (
        <div className={ classes['todo-list'] }>
            {!!todoList.length
                ? todoList.map(todoItem => (
                    <TodoItem key={ todoItem._id } item={ todoItem } />
                ))
                :<div className={classes['todo-list__empty']}>Список задач пуст</div>
            }
        </div>
    )
};

export default TodoList;
