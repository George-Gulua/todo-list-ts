import { IRepository } from "../types/Irepository";
import { Itodo } from "../types/Itodo";

export default class TodoRepositoryLocalStorage implements IRepository<Itodo>{
    getAll = (): any => {
        let newArray = JSON.parse(localStorage.getItem("todo-list") || '{}')
        if(newArray) {
            localStorage.setItem('todo-list', JSON.stringify([]))
        }
        return newArray
    };
    create = (item: {}): any => {
        let newArray = JSON.parse(localStorage.getItem("todo-list") || '{}')
        newArray = [...newArray, item]
        localStorage.setItem('todo-list', newArray)
        return newArray
    };
    delete = (_id: {}): any => {
        let newArray = JSON.parse(localStorage.getItem("todo-list") || '{}');
        newArray.filter(({ id }:{ id : number }) => id !== _id)
        localStorage.setItem('todo-list', JSON.stringify(newArray))
        return newArray
    };
}
