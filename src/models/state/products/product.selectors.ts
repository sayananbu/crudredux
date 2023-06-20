import { RootState } from "../../../store/store";
import { ProductState } from "../product-state.model";

const selectProductState: (state: RootState) => ProductState = (state: RootState) => state.products;

export const selectProducts = (state: RootState) => selectProductState(state).products