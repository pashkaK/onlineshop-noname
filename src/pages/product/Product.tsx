import React, { FC } from 'react'
import Layout from '../../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { ProductsService } from '../../services/ProductsService'
import { useParams } from 'react-router-dom'
import Button from '../../components/ui/button/Button'
import Gallery from '../../components/Gallery/Gallery'
import styles from './Product.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import RatingBar from '../../components/ui/RatingBar/RatingBar'

const Product: FC = () => {
	const params = useParams()
	const productId = params.id
	const { data: product, isLoading } = useQuery(['product', productId], () =>
		ProductsService.getProductsById(productId || '')
	)

	const { items } = useTypedSelector(state => state.cart)
	const { removeFromCart, addToCart } = useActions()

	if (!product)
		return (
			<Layout>
				<div>Product not found</div>
			</Layout>
		)
	const isInCart = items.some(item => item.id === Number(productId))
	return (
		<Layout>
			{isLoading && <div>Loading...</div>}

			<Gallery images={product.images} />
			<h1 className={styles.heading}>{product.title}</h1>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0
				}).format(product.price)}
			</div>
			<div className={styles.description}>{product.description}</div>
			<RatingBar rating={product.rating} />
			<Button
				onClick={() =>
					isInCart ? removeFromCart(Number(productId)) : addToCart(product)
				}
			>
				{isInCart ? 'This product is already in the cart' : 'Add to cart'}
			</Button>
		</Layout>
	)
}

export default Product
