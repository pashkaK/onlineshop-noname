import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import style from './Nav.module.scss'

const Nav = () => {
	const { isAuth } = useAuth()
	return isAuth ? (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/cart'>Cart</Link>
			<Link to='/personalarea'>Personal Area</Link>
		</nav>
	) : (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/cart'>Cart</Link>
			<div className={style.authwrapper}>
				<Link to='/login'>Sign Up</Link>/<Link to='/register'>Register</Link>
			</div>
		</nav>
	)
}

export default Nav
