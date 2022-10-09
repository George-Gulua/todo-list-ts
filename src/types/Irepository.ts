export interface IRepository<T> {
    getAll: () =>  Promise<any>
    create: (data: T) => Promise<any>
    delete: (_id: number) => Promise<any>
}
