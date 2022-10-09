import {Itodo} from "../types/Itodo";
import {RepoFactory} from "../factory/repoFactory";

interface methodsInterface {
    getAll: () => Promise<void>
    create: (item: Itodo) => Promise<void>
    delete: (_id: number) => Promise<void>
}

export const useTodo = (todoList: Itodo[], setTodoList:(todoList: Itodo[]) => void) => {
    const todoRepository = new RepoFactory('local-storag').repository
    const methods:methodsInterface = {
        getAll: async (): Promise<void> => setTodoList(await todoRepository.getAll()),
        create: async (item: Itodo): Promise<void> => setTodoList(await todoRepository.create(item)),
        delete: async (_id: number): Promise<void> => setTodoList(await todoRepository.delete(_id))
    }
    return methods
}