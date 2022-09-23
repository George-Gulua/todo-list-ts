import axios from 'axios';

export default class TodoRepository {
    static async fetch() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return data
    }
}
/*Создать интерфейс с методами, которые мы юзаем в реакете. Сделать две реализации:
* 1)всегда возвращает что-то localstorage.
* 2)когда мы переделаем массив на вход, он загрузился с LocalStorage inmemory
* */