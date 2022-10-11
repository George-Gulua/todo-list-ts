export interface IRepository<T> {
    getAll: () =>  Promise<any>
    create: (data: T) => Promise<any>
    delete: (id: number) => Promise<any>
}
