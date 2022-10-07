import classes from './TodoItem.module.css';
import { FC, useContext } from "react";
import {Itodo} from "../../../types/Itodo";

interface TodoItemProps  {
    item: Itodo;
    deleteMethod: Function
}

const TodoItem:FC<TodoItemProps> = ({ item, deleteMethod}) => {
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
            <div className={ classes['todo-item__action']} onClick={ deleteMethod.bind(this, item._id) }>
                &times;
            </div>
        </div>
    )
}

export default TodoItem
