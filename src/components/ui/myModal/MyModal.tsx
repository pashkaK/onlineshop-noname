import React, { FC, PropsWithChildren } from 'react'
import styles from './MyModal.module.scss'

const MyModal: FC<
	PropsWithChildren<{ visible: boolean; setVisible: (b: boolean) => void }>
> = ({ children, visible, setVisible }) => {
	const rootClasses = [styles.myModal]
	if (visible) {
		rootClasses.push(styles.active)
	}
	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal
