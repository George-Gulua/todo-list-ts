import axios from 'axios';
import { IRepository } from "../types/Irepository";
import { ITodo } from "../types/ITodo";
import {DataFactory} from "../factory/dataFactory";

axios.defaults.baseURL = `http://localhost:2000/api/todos`

export default class TodoRepositoryRestApi implements IRepository<ITodo>{
    getAll = async (): Promise<ITodo> => {
        const { data } =  await axios.get('')
        return data.map((item: any ) => new DataFactory(item).model)
    };
    create = async (item: ITodo): Promise<ITodo> => {
        const { data } = await axios.post('', item)
        return data.map((item: any ) => new DataFactory(item).model)
    };
    delete = async (id: number): Promise<ITodo> => {
        const { data } = await axios.delete(`/${id}`)
        return data.map((item: any ) => new DataFactory(item).model)
    };
}
