import React, { FC, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useProducts } from '../../hooks/useProducts'
import MyInput from '../../components/ui/input/MyInput'
import MySelect from '../../components/ui/select/MySelect'
import { useQuery } from '@tanstack/react-query'
import { ProductsService } from '../../services/ProductsService'
import Pagination from '../../components/ui/pagination/Pagination'
import styles from './Home.module.scss'
import Footer from '../../components/Footer/Footer'

const Home: FC = () => {
	// const { isAuth, email } = useAuth()
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedSort, setSelectedSort] = useState('')
	const [page, setPage] = useState(1)

	const { data, isLoading } = useQuery(['products', 'total', page], () =>
		ProductsService.getProducts(page)
	)
	const changePage = (page: number) => {
		setPage(page)
	}

	const sortProducts = (sort: string) => {
		setSelectedSort(sort)
	}

	const sortedAndSearchedProducts = useProducts(
		data?.products,
		selectedSort,
		searchQuery
	)
	return (
		<div>
			<Layout title='Shop the collection'>
				<div className={styles.filter}>
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

				{isLoading ? (
					<div className={styles.loading}>Loading...</div>
				) : sortedAndSearchedProducts?.length ? (
					<div className='grid__wrapper'>
						{sortedAndSearchedProducts.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				) : (
					<div>Products not found</div>
				)}
				<Pagination
					page={page}
					limit={data?.limit}
					total={data?.total}
					changePage={changePage}
				/>
			</Layout>
			<Footer />
		</div>
	)
}

export default Home
