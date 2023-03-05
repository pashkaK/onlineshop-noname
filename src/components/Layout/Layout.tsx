import React, { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import Header from '../Header/Header'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	return (
		<div className={styles.layoutWrapper}>
			<div className={styles.layout}>
				<Header />
				{title && <h1 className={styles.heading}>{title}</h1>}
				{children}
			</div>
		</div>
	)
}

export default Layout
