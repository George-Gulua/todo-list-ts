import axios from 'axios';
import { IRepository } from "../types/Irepository";
import { ITodo } from "../types/ITodo";

axios.defaults.baseURL = `http://localhost:2000/api/todos`

export default class TodoRepositoryRestApi implements IRepository<ITodo>{
    getAll = async (): Promise<ITodo> => {
        const { data } =  await axios.get('')
        return data
    };
    create = async (item: ITodo): Promise<ITodo> => {
        const { data } = await axios.post('', item)
        return data
    };
    delete = async (id: number): Promise<ITodo> => {
        const { data } = await axios.delete(`/${id}`)
        return data
    };
}
