import { FC, memo } from 'react';
import { SCardDescription, SCardTitle, SImage, SPrice, SProductCard } from './styles/card.styles';
import { ProductModel } from '../product.model';

type ProductCardProps = ProductModel;
const ProductCard: FC<ProductCardProps> = ({ title, price, description, image }) => {
    return (
        <SProductCard>
            <SImage src={image} alt='Something' />
            <SCardTitle>{title}</SCardTitle>
            <SCardDescription>{description}</SCardDescription>
            <SPrice>{price}$</SPrice>
        </SProductCard>
    );
};

export default memo(ProductCard);
