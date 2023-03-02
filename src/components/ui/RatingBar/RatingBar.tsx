import React from 'react'
import styles from './RatingBar.module.scss'

interface RatingBarProps {
	rating: number
}
const RatingBar = ({ rating }: RatingBarProps) => {
	return (
		<div className={styles.rating}>
			<progress value={rating} max='5' />
			<svg viewBox='0 0 5 1'>
				<symbol id='star' viewBox='0 0 120 24'>
					<path
						d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
						fill='white'
						fill-rule='evenodd'
					/>
				</symbol>
				<use x='0' xlinkHref='#star' />
				<use x='1' xlinkHref='#star' />
				<use x='2' xlinkHref='#star' />
				<use x='3' xlinkHref='#star' />
				<use x='4' xlinkHref='#star' />
			</svg>
		</div>
	)
}

export default RatingBar
