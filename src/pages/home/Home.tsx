import React, { FC, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useProducts } from '../../hooks/useProducts'
import MyInput from '../../components/ui/input/MyInput'
import MySelect from '../../components/ui/select/MySelect'
import { useQuery } from '@tanstack/react-query'
import { ProductsService } from '../../services/ProductsService'

const Home: FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedSort, setSelectedSort] = useState('')
	const [page, setPage] = useState(0)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const { data: products, isLoading } = useQuery(
		['products', page],
		() => ProductsService.getProducts(page),
		{
			select: ({ products }) => products
		}
	)

	const sortProducts = (sort: string) => {
		setSelectedSort(sort)
	}

	const sortedAndSearchedProducts = useProducts(
		products,
		selectedSort,
		searchQuery
	)
	return (
		<Layout title='Shop the collection'>
			<div>
				<MyInput
					placeholder='Search product'
					value={searchQuery}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearchQuery(e.target.value)
					}
				/>
				<MySelect
					value={selectedSort}
					onChange={sortProducts}
					defaultValue='Sorting'
					options={[
						{ value: 'expensivePrice', name: 'From expensive to cheap' },
						{ value: 'cheapPrice', name: 'From cheap to expensive' },
						{ value: 'rating', name: 'By rating' }
					]}
				/>
			</div>
			{/*<PostFilter />*/}
			{isLoading ? (
				<div className='text-blue-400 text-2xl'>Loading...</div>
			) : sortedAndSearchedProducts?.length ? (
				<div className='grid__wrapper'>
					{sortedAndSearchedProducts.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>Products not found</div>
			)}
		</Layout>
	)
}

export default Home
