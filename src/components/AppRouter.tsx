import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product'
import RegisterPage from '../pages/register/RegisterPage'
import LoginPage from '../pages/login/LoginPage'
import PersonalArea from '../pages/personalArea/PersonalArea'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='*' element={<LoginPage />} />
			<Route path='/' element={<Home />} />
			<Route path='/personalarea' element={<PersonalArea />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/product/:id' element={<Product />} />
		</Routes>
	)
}

export default AppRouter
