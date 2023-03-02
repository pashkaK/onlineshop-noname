import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage: localStorage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>
