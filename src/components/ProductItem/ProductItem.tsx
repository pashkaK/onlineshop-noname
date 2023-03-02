import React, { FC } from 'react'
import { IProduct } from '../../types/IProduct'
import styles from './ProductItem.module.scss'
import { Link } from 'react-router-dom'
import RatingBar from '../ui/RatingBar/RatingBar'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.product__item}>
			<Link to={`/product/${product.id}`}>
				<div
					style={{
						backgroundImage: `url(${product.thumbnail})`
					}}
					className={styles.image}
				></div>
			</Link>
			<div className={styles.heading}>{product.title}</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0
				}).format(product.price)}
			</div>
			{/*<div className={styles.rating}>{product.rating}</div>*/}
			<RatingBar rating={product.rating} />
		</div>
	)
}

export default ProductItem
