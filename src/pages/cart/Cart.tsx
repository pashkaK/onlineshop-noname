import React, { FC } from 'react'
import Layout from '../../components/Layout/Layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import styles from './Cart.module.scss'
import Button from '../../components/ui/button/Button'

const Cart: FC = () => {
	const { items } = useTypedSelector(state => state.cart)
	const { removeFromCart } = useActions()
	return (
		<Layout title='Cart'>
			{items.length ? (
				<>
					<div className={styles.cart}>
						{items.map(product => (
							<div key={product.id}>
								<div>
									<span className={styles.product__title}>{product.title}</span>
									<span>
										{new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD',
											maximumFractionDigits: 0
										}).format(product.price)}
									</span>
								</div>
								<button
									className={styles.btn}
									onClick={() => removeFromCart(product.id)}
								>
									Remove
								</button>
							</div>
						))}
					</div>
					<Button>Checkout</Button>
				</>
			) : (
				<div>Cart is empty</div>
			)}
		</Layout>
	)
}

export default Cart
