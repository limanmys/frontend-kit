export interface IFilter {
    page?: number
    per_page?: number

    sort?: string
    search?: string
    filter?: string
    date?: string
    sorter?: {
        columnKey: string
        order: string | boolean
    }
}