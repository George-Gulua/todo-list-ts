import classes from './TodoItem.module.css';
import { FC, useContext } from "react";
import {Itodo} from "../../../types/types";
import TodoRepository from "../../../API/todo-repository";
import { GlobalContext } from "../../../context/global";

interface TodoItemProps  {
    item: Itodo;
}

const TodoItem:FC<TodoItemProps> = ({ item}) => {
    const { setTodoList } = useContext(GlobalContext);

    const deleteTodo = (_id: {}) => {
        (async () => {
            setTodoList(await TodoRepository.deleteById(_id))
        })()
    }

    return (
        <div className={ classes['todo-item'] }>
            <div className={ classes['todo-item__text'] }>
                <h3 className={ classes.title }>
                    [{ item._id }]
                    { item.title }
                </h3>
                <p className={ classes.body }>
                    { item.body }
                </p>
            </div>
            <div className={ classes['todo-item__action']} onClick={ deleteTodo.bind(this, item._id)}>
                &times;
            </div>
        </div>
    )
}

export default TodoItem
