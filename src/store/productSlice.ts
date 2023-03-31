import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../types/IItem'
import { IProduct } from '../types/IProduct'

const initialState: IInitialState = {
	items: []
}
export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProduct>) => {
			state.items.push(action.payload)
		}
	}
})
