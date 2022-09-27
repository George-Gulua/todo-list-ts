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
    static async deleteById(_id: {}) {
        const { data } = await axios.delete(`http://localhost:2000/api/todos/${_id}`)
        return data
    }
}
