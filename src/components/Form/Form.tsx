import React, { useState } from 'react'
import MyInput from '../ui/input/MyInput'
import Button from '../ui/button/Button'
import styles from './Form.module.scss'

interface FormProps {
	title: string
	handleClick: (email: string, pass: string) => void
	handleGoogle: () => void
}
const Form = ({ title, handleClick, handleGoogle }: FormProps) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	return (
		<div className={styles.wrapper__form}>
			<MyInput
				type='email'
				value={email}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
					setEmail(e.target.value)
				}
				// onChange={e => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<br />
			<MyInput
				type='password'
				value={pass}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
					setPass(e.target.value)
				}
				// onChange={e => setPass(e.target.value)}
				placeholder='Password'
			/>
			<div className={styles.buttons}>
				<Button onClick={() => handleClick(email, pass)}>{title}</Button>
				<span className={styles.or}>Or</span>

				<Button onClick={() => handleGoogle()}>Sign with Google</Button>
			</div>
		</div>
	)
}

export default Form
