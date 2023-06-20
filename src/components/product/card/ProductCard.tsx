import { FC, memo } from 'react';
import { SImage, SPrice, SProductCard } from './styles/card.styles';
import { ProductModel } from '../../../models/product.model';
import Description from './Description';
import Title from './Title';

type ProductCardProps = ProductModel;
const ProductCard: FC<ProductCardProps> = ({ title, price, description, image }) => {
	const maxLength = 120;
    return (
        <SProductCard>
            <SImage src={image} alt='Something' />
            <Title title={title}/>
            <Description description={description}/>
            <SPrice>{price}$</SPrice>
        </SProductCard>
    );
};

export default memo(ProductCard);
