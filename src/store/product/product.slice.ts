import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';
import { ProductState } from '../../models/state/product-state.model';
import { createProductApi } from '../../services/product-api.service';

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
    },
    extraReducers: (builder: any) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(createProductApi.fulfilled, (state: any, action: any) => {
            // Add user to the state array
            console.log('action: ',action)
        });
    },
});

export const { setProductsAction } = productsSlice.actions;
export default productsSlice.reducer;
