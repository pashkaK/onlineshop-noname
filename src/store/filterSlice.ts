import { createSlice } from '@reduxjs/toolkit'

// const initialState: IProductsResponse = {
// 	items: IProduct[],
// 	searchQuery: string
// }
const initialState = {}
export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		// searchProducts: (state, action: PayloadAction<IProduct>) => {
		// 	const filteredProducts = state.items?.filter(product => {
		// 		return product.title.toLowerCase().includes(searchQuery.toLowerCase())
		// 	})
		// }
	}
})
