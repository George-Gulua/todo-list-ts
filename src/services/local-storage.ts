import TodoRepository from "../API/todo-repository";

export default class StorageService {
    static StorageInitialization (todoList: never[]) {
        if(!localStorage.getItem('todo-list')) {
            localStorage.setItem('todo-list', JSON.stringify([]))
        }
    }
    static async StorageFetching () {
        let fetchData = JSON.parse(localStorage.getItem('todo-list') || '{}')

        if(JSON.parse(localStorage.getItem('todo-list') || '{}').length === 0) {
            fetchData = await TodoRepository.fetch()
        }
        return fetchData
    }
    static StorageEdit (todoList: never[]) {
        localStorage.setItem('todo-list', JSON.stringify(todoList))
    }
    static StorageSetItem (key: string, value: string) {
        return localStorage.setItem(key, value)
    }
}
