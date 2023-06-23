import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';
import { ProductState } from '../../models/state/product-state.model';

export const initialState: ProductState = {
    products: [],
};
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        addNewProductAction(state, action: PayloadAction<Omit<ProductModel, 'id'>>) {
            state.products.unshift({ id: state.products.length + 1, ...action.payload });
        },
    },
});

export const { setProductsAction, addNewProductAction } = productsSlice.actions;
export default productsSlice.reducer;
