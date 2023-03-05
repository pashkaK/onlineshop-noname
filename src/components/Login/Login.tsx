import React from 'react'
import { useActions } from '../../hooks/useActions'
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth'
import Form from '../Form/Form'
import { useNavigate } from 'react-router-dom'
import { app, provider } from '../../firebase'

const Login = () => {
	const { setUser } = useActions()
	let navigate = useNavigate()
	const auth = getAuth(app)
	const handleLogin = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken
				})
				navigate('/personalarea')
			})
			.catch(() => alert('Invalid user!'))
	}

	const handleWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken
				})
				navigate('/personalarea')
			})
			.catch(() => alert('Invalid user!'))
	}

	return (
		<Form
			title='Sign in'
			handleClick={handleLogin}
			handleGoogle={handleWithGoogle}
		></Form>
	)
}

export default Login
