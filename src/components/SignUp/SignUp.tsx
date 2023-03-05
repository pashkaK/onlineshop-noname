import React from 'react'
import { useActions } from '../../hooks/useActions'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithPopup
} from 'firebase/auth'
import Form from '../Form/Form'
import { useNavigate } from 'react-router-dom'
import { app, provider } from '../../firebase'

const SignUp = () => {
	const { setUser } = useActions()
	let navigate = useNavigate()
	const auth = getAuth(app)
	const handleRegister = (email: string, password: string) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken
				})
				navigate('/personalarea')
			})
			.catch(console.error)
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
			title='Register'
			handleClick={handleRegister}
			handleGoogle={handleWithGoogle}
		></Form>
	)
}

export default SignUp
