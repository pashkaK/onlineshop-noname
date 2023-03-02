import React, { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { Link } from 'react-router-dom'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	return (
		<div className={styles.layout}>
			<header>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/cart'>Cart</Link>
				</nav>
			</header>
			{title && <h1 className={styles.heading}>{title}</h1>}
			{children}
			<footer></footer>
		</div>
	)
}

export default Layout
