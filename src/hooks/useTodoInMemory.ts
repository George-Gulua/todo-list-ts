import { useState } from "react";
import { ITodo } from "../types/ITodo";

interface methodsInMemoryInterface {
    getAll: () => ITodo[]
    create: (item: ITodo) => void
    delete: (delete_id: number) => void
}

export const useTodoInMemory = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([])
    const methods:methodsInMemoryInterface = {
        getAll: () => todoList ,
        create: (item) => setTodoList([...todoList, item]),
        delete: delete_id => setTodoList(todoList.filter(({ id } : { id: number}) => id !== delete_id))
    }
    return [methods, todoList]
}
