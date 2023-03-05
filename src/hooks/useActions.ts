import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { cartSlice } from '../store/cartSlice'
import { userSlice } from '../store/userSlice'

const rootActions = {
	...cartSlice.actions,
	...userSlice.actions
}
export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
