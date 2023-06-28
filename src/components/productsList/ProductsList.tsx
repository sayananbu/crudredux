import { FC, memo } from 'react';
import ProductCard from '../product/card/ProductCard';
import { SProductList } from './styles/productslist.styles';
import { selectProducts } from '../../models/state/products/product.selectors';
import { useSelector } from 'react-redux';

type ProductListProps = {};
const ProductList: FC<ProductListProps> = () => {
    const products = useSelector(selectProducts);
    return (
        <SProductList>
            {products.map(val => (
                <ProductCard key={val.id} {...val} />
            ))}
        </SProductList>
    );
};

export default memo(ProductList);
