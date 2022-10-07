export interface IRepository<T> {
    getAll: () => T[]
    create: (data: T) => T[]
    delete: (_id: number) => T[]
}
