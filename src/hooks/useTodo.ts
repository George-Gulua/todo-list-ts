import { ITodo } from "../types/ITodo";
import { RepoFactory } from "../factory/repoFactory";

interface methodsInterface {
    getAll: () => Promise<void>
    create: (item: ITodo) => Promise<void>
    delete: (id: number) => Promise<void>
}

export const useTodo = (todoList: ITodo[], setTodoList:(todoList: ITodo[]) => void) => {
    const todoRepository = new RepoFactory('local-storage').repository
    const methods:methodsInterface = {
        getAll: async (): Promise<void> => setTodoList(await todoRepository.getAll()),
        create: async (item: ITodo): Promise<void> => setTodoList(await todoRepository.create(item)),
        delete: async (id: number): Promise<void> => setTodoList(await todoRepository.delete(id))
    }
    return methods
}