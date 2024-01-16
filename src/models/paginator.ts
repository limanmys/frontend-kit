export interface IPaginator<T> {
    current_page: number
    records: T[]
    total_pages: number
    total_records: number
}