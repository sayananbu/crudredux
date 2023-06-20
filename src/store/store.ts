import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./product/product.slice"

export const productsStore = configureStore({
	reducer:{
		products:productsReducer
	}
})
export type RootState = ReturnType<typeof productsStore.getState>
export type AppDispatch = typeof productsStore.dispatch