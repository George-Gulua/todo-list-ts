import TodoRepository from "../API/todo-repository";
import {Itodo} from "../types/Itodo";

interface methodsInterface {
    getAll: () => Promise<void>
    create: (item: object) => Promise<void>
    delete: (_id: number) => Promise<void>
}

export const useTodo = (todoList: Itodo[], setTodoList:(todoList: Itodo[]) => void) => {
    const todoRepository = new TodoRepository()
    const methods:methodsInterface = {
        getAll: async (): Promise<void> => setTodoList(await todoRepository.getAll()),
        create: async (item: object): Promise<void> => setTodoList(await todoRepository.create(item)),
        delete: async (_id: number): Promise<void> => setTodoList(await todoRepository.delete(_id))
    }
    return methods
}