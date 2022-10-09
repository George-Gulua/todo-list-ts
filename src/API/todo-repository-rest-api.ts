import axios from 'axios';
import { IRepository } from "../types/Irepository";
import { Itodo } from "../types/Itodo";

axios.defaults.baseURL = `http://localhost:2000/api/todos`

export default class TodoRepositoryRestApi implements IRepository<Itodo>{
    getAll = async (): Promise<any> => {
        const { data } =  await axios.get('')
        return data
    };
    create = async (item: Itodo): Promise<any> => {
        const { data } = await axios.post('', item)
        return data
    };
    delete = async (_id: number): Promise<any> => {
        const { data } = await axios.delete(`/${_id}`)
        return data
    };
}
