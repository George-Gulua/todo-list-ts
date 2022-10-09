import axios from 'axios';
import { IRepository } from "../types/Irepository";
import { Itodo } from "../types/Itodo";

interface TodoRepositoryRestApiInterface extends IRepository<Itodo>{
    link: string
}

export default class TodoRepositoryRestApi implements TodoRepositoryRestApiInterface{
    link = `http://localhost:2000/api/todos`
    getAll = async (): Promise<any> => {
            const { data } =  await axios.get(this.link).then()
            return data
    };
    create = async (item: {}): Promise<any> => {
        const { data } = await axios.post(this.link, item)
        return data
    };
    delete = async (_id: {}): Promise<any> => {
        const { data } = await axios.delete(`${this.link}/${_id}`)
        return data
    };
}
