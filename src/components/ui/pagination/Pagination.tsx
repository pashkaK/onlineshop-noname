import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import { IPagination } from '../../../types/IPagination'
import { getPagesCount } from '../../../utils/pages'
import styles from './Pagination.module.scss'

const Pagination = ({ total, limit, page, changePage }: IPagination) => {
	let totalPages = getPagesCount(total, limit)
	let pagesArray = usePagination(totalPages)

	return (
		<div className={styles.pagination__wrapper}>
			{pagesArray.map(p => (
				<span
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? 'page page__current' : 'page'}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default Pagination
