import { FC, memo } from 'react';
import ProductCard from '../product/card/ProductCard';
import { SProductList } from './styles/productslist.styles';
import { selectProducts } from '../../models/state/products/product.selectors';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, LoaderFunction, Route, Routes } from 'react-router-dom'
import ProductViewScreen from '../screen/ProductViewScreen/ProductViewScreen';

type ProductListProps = {};
const ProductList: FC<ProductListProps> = () => {
    const products = useSelector(selectProducts);
    return (
        <Router>
            <Routes>
                <Route
                    path='/crudredux'
                    element={
                        <SProductList>
                            {products.map(val => (
                                <ProductCard key={val.id} {...val} />
                            ))}
                        </SProductList>
                    }
                />
                <Route
                    path='products/:productId'
                    element={<ProductViewScreen />}
                    loader={async ({ params }) => {
                        return products.find(val=>Number(params.productId) === val.id)
                    }}
                />
            </Routes>
        </Router>
    );
};

export default memo(ProductList);
