import { useState } from "react";
import { Itodo } from "../types/Itodo";

interface methodsInMemoryInterface {
    getAll: () => Itodo[]
    create: (item: Itodo) => void
    delete: (delete_id: number) => void
}

export const useTodoInMemory = () => {
    const [todoList, setTodoList] = useState<Itodo[]>([])
    const methods:methodsInMemoryInterface = {
        getAll: () => todoList ,
        create: (item) => setTodoList([...todoList, item]),
        delete: delete_id => setTodoList(todoList.filter(({ _id } : { _id: number}) => _id !== delete_id))
    }
    return [methods, todoList]
}
