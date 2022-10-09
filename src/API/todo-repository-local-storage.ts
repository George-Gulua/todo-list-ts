import { IRepository } from "../types/Irepository";
import { Itodo } from "../types/Itodo";

export default class TodoRepositoryLocalStorage implements IRepository<Itodo>{
    getAll = (): any => {
        if(!(localStorage.getItem("todo-list") || '{}')) {
            localStorage.setItem('todo-list', JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem("todo-list") || '{}')
    };
    create = (item: Itodo): any => {
        item._id = Date.now()
        let newArray = [...JSON.parse(localStorage.getItem("todo-list") || '{}'), item]
        localStorage.setItem('todo-list', JSON.stringify(newArray))
        return JSON.parse(localStorage.getItem("todo-list") || '{}')
    };
    delete = (delete_id: number): any => {
        let newArray = JSON.parse(localStorage.getItem("todo-list") || '{}').filter(({ _id }:{ _id : number }) => _id !== delete_id)
        localStorage.setItem('todo-list', JSON.stringify(newArray))
        return JSON.parse(localStorage.getItem("todo-list") || '{}')
    };
}
