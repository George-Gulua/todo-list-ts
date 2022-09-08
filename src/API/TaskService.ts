import axios from 'axios';

export default class TaskService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return response.data
    }
}