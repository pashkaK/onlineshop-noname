import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Login from '../../components/Login/Login'
import { useAuth } from '../../hooks/useAuth'
import styles from '../register/RegisterPage.module.scss'

const LoginPage = () => {
	const { isAuth } = useAuth()
	return isAuth ? (
		<Navigate to='/personalarea'></Navigate>
	) : (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Login</h1>
			<Login />
			<p>
				Or{' '}
				<Link className={styles.link} to='/register'>
					register
				</Link>
			</p>
		</div>
	)
}

export default LoginPage
