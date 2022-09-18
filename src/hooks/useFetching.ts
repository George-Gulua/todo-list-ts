import {useEffect} from "react";
import StorageService from "../services/local-storage";

export const useFetching = (todoList: Array<never>, setTodoList: Function) => {
    useEffect(() => {
        StorageService.StorageInitialization(todoList)
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        StorageService.StorageFetching().then(todoList => {
            setTodoList(todoList)
            StorageService.StorageEdit(todoList)
        })
    }
}
