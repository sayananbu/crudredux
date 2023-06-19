import { FC, memo, useState } from 'react';
import { SMarketPlaceScreenContainer } from './styles/marketplacescreen.styles';
import ProductList from '../../productsList/ProductsList';
import { ProductModel } from '../../product/product.model';
import { productListData } from '../../../data/products.data';

type MarketPlaceScreenProps = {};
const MarketPlaceScreen: FC<MarketPlaceScreenProps> = () => {
    const [products, setProducts] = useState<ProductModel[]>(productListData);

    return (
        <SMarketPlaceScreenContainer>
            <ProductList products={products}/>
        </SMarketPlaceScreenContainer>
    );
};

export default memo(MarketPlaceScreen);
