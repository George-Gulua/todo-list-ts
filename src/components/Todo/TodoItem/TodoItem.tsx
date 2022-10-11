import classes from './TodoItem.module.css';
import { FC } from "react";
import { ITodo } from "../../../types/ITodo";

interface TodoItemProps  {
    item: ITodo;
    deleteMethod: Function
}

const TodoItem:FC<TodoItemProps> = ({ item, deleteMethod}) => {
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
            <div className={ classes['todo-item__action']} onClick={ deleteMethod.bind(this, item.id) }>
                &times;
            </div>
        </div>
    )
}

export default TodoItem
