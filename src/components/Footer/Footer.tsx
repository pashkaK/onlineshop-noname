import React from 'react'
import Nav from '../ui/nav/Nav'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Nav />
			<div className={styles.created}>
				<span>Online shop created by Pavlo Kozulia</span>
			</div>
		</footer>
	)
}

export default Footer
