import { IProduct } from '../types/IProduct'
import { useMemo } from 'react'

export const useFilteredProducts = (
	products: IProduct[] | undefined,
	search: string
) => {
	const filteredProducts = useMemo(() => {
		if (products)
			return products.filter(product =>
				product.title.toLowerCase().includes(search.toLowerCase())
			)
		return products
	}, [search, products])
	return filteredProducts
}
export const useProducts = (
	products: IProduct[] | undefined,
	sort: string,
	searchQuery: string
) => {
	const filteredProducts = useFilteredProducts(products, searchQuery)

	const sortedAndFilteredProducts = useMemo(() => {
		if (filteredProducts && sort === 'expensivePrice') {
			return filteredProducts.sort((a, b) => b.price - a.price)
		} else if (filteredProducts && sort === 'cheapPrice') {
			return filteredProducts.sort((a, b) => a.price - b.price)
		} else if (filteredProducts && sort === 'rating') {
			return filteredProducts.sort((a, b) => b.rating - a.rating)
		}
		return filteredProducts
	}, [sort, filteredProducts])
	return sortedAndFilteredProducts
}
