export interface IPagination {
	page: number
	total: number | undefined
	limit: number | undefined
	changePage: (p: any) => void
}
