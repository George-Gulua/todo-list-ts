import axios from 'axios';

export default class TodoRepository {
    static async fetch() {
        const { data } = await axios.get('http://localhost:2000/api/todos')
        return data
    }
    static async create(item: {}) {
        const { data } = await axios.post('http://localhost:2000/api/todos', item)
        return data
    }
    // todo:fix typeId
    static async deleteById(id: any) {
        const { data } = await axios.delete(`http://localhost:2000/api/todos/${id}`)
        return data
    }
}