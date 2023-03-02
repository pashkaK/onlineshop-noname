import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../types/IItem'
import { IProduct } from '../types/IProduct'

const initialState: IInitialState = {
	items: []
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.items.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		}
	}
})
