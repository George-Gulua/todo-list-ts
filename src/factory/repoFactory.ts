import { IRepository } from "../types/Irepository";
import { ITodo } from "../types/ITodo";
import TodoRepositoryRestApi from "../API/todo-repository-rest-api";
import TodoRepositoryLocalStorage from "../API/todo-repository-local-storage";

type todoPersistenceMode = 'local-storage' | 'restapi'

const LOCAL_STORAGE = 'local-storage'

export class RepoFactory {
    repository: IRepository<ITodo>
    constructor(repositoryName: todoPersistenceMode) {
        this.repository = new TodoRepositoryRestApi()

        if(repositoryName === LOCAL_STORAGE) {
            this.repository = new TodoRepositoryLocalStorage()
        }
    }
}