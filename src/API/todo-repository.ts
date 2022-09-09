import axios from 'axios';

export default class TodoRepository {
    static async fetch() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return data
    }
}
