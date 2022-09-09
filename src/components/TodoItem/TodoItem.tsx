import classes from './TodoItem.module.css';
import {FC} from "react";
import {Itodo} from "../../types/types";

interface TodoItem  {
    item: Itodo;
    deleteTodoItemById: Function;
}

const TodoItem:FC<TodoItem> = ({ item, deleteTodoItemById }) => {
    return (
        <div className={ classes['todo-item'] }>
            <div className={ classes['todo-item__text'] }>
                <h3 className={ classes.title }>
                    [{ item.id }]
                    { item.title }
                </h3>
                <p className={ classes.body }>
                    { item.body }
                </p>
            </div>
            <div className={ classes['todo-item__action'] } onClick={ deleteTodoItemById.bind(this, item.id) }>
                &times;
            </div>
        </div>
    )
}

export default TodoItem
