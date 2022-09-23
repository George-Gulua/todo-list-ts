import {useEffect} from "react";
import StorageService from "../services/local-storage";

export const useFetching = (todoList: Array<never>, setTodoList: Function) => {/*засунул все в один хук( useFetching не нужен) Все это добавим в репозиторий*/
    useEffect(() => {
        StorageService.StorageInitialization(todoList)
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        StorageService.StorageFetching().then(todoList => {/*setTodoL*/
            setTodoList(todoList)
            StorageService.StorageEdit(todoList)
        })
    }
}
