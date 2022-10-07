import axios from 'axios';
import { IRepository } from "../types/Irepository";
import { Itodo } from "../types/Itodo";

interface TodoRepositoryRest extends IRepository<Itodo>{
    link: string
}

export default class TodoRepository implements TodoRepositoryRest{
    link = `http://localhost:2000/api/todos`
    getAll = (): any => {
        return (async () => {
            const { data } = await axios.get(this.link)
            return data
        })()
    };
    create = (item: {}): any => {
        return (async () => {
            const { data } = await axios.post(this.link, item)
            return data
        })()
    };
    delete = (_id: {}): any => {
        return (async () => {
            const { data } = await axios.delete(`${this.link}/${_id}`)
            return data
        })()
    };
}
