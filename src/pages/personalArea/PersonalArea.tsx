import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import Button from '../../components/ui/button/Button'
import { useActions } from '../../hooks/useActions'
import { Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from './PersonalArea.module.scss'

const PersonalArea = () => {
	const { isAuth, email } = useAuth()
	const { removeUser } = useActions()
	return isAuth ? (
		<Layout>
			<div className={styles.personalarea}>
				<h1>Welcome, {email}</h1>

				<Button onClick={() => removeUser()}>Log out from {email}</Button>
			</div>
		</Layout>
	) : (
		<Navigate to='/'></Navigate>
	)
}

export default PersonalArea
