import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import SignUp from '../../components/SignUp/SignUp'
import { useAuth } from '../../hooks/useAuth'
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
	const { isAuth } = useAuth()
	return isAuth ? (
		<Navigate to='/personalarea'></Navigate>
	) : (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Register</h1>
			<SignUp />
			<p>
				Already have an account?{' '}
				<Link className={styles.link} to='/login'>
					Sign in
				</Link>
			</p>
		</div>
	)
}

export default RegisterPage
