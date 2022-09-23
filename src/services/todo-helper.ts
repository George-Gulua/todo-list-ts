import StorageService from "./local-storage";

export default class TodoHelper {
    static createTodoItem = (todoItem: never, todoList: Array<never>, setTodoList: Function) => {/*Избавиться от setTodoList*/
        if(todoItem) {
            const newTodoList = [...todoList, todoItem]
            setTodoList(newTodoList)
            StorageService.StorageEdit(newTodoList)
        }
    }
    static deleteTodoItemById = (todoItemId: number, todoList: Array<never>, setTodoList: Function) => {/*Избавиться от setTodoList*/
        const Filtered = todoList.filter(({ id }) => id !== todoItemId)
        setTodoList(Filtered)
        StorageService.StorageEdit(Filtered)
    }
}
