import { IRepository } from "../types/Irepository";
import { ITodo } from "../types/ITodo";

export default class TodoRepositoryLocalStorage implements IRepository<ITodo>{
    getAll = (): any => {
        if(!JSON.parse(localStorage.getItem("todo-list") || '[]')) {
            localStorage.setItem('todo-list', JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem("todo-list") || '[]')
    };
    create = (item: ITodo): any => {
        item.id = Date.now()
        let newArray = [...JSON.parse(localStorage.getItem("todo-list") || '[]'), item]
        localStorage.setItem('todo-list', JSON.stringify(newArray))
        console.log(JSON.parse(localStorage.getItem("todo-list") || '[]'))
        return JSON.parse(localStorage.getItem("todo-list") || '[]')
    };
    delete = (delete_id: number): any => {
        let newArray = JSON.parse(localStorage.getItem("todo-list") || '[]').filter(({ id }:{ id : number }) => id !== delete_id)
        localStorage.setItem('todo-list', JSON.stringify(newArray))
        return JSON.parse(localStorage.getItem("todo-list") || '[]')
    };
}
