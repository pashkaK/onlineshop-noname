export interface IProductsResponse {
	products: IProduct[]
	limit: number
	skip: number
	total: number
	query?: string
}
export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
	hasMore?: boolean
}
