import { FC, SyntheticEvent, memo, useCallback, useMemo, useState } from 'react';
import {
    SButtonShowHide,
    SCardDescription,
    SCardTitle,
    SDeleteButtonContainer,
    SImage,
    SPrice,
    SPriceContainer,
    SProductCard,
} from './styles/card.styles';
import { ProductModel } from '../../../models/product.model';
import textTrimmer from '../../../utils/textTrimmer';
import { deleteProductAction } from '../../../store/product/product.slice';
import { useDispatch } from 'react-redux';
import DeleteButton from '../../deleteButton/DeleteButton';
import { Link } from 'react-router-dom';

type ProductCardProps = ProductModel;
const ProductCard: FC<ProductCardProps> = ({ id, title, price, description, image }) => {
    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const maxLen = { title: 70, description: 120 };

    const trimmedTitle = useMemo(() => textTrimmer(title, maxLen.title), [title, maxLen.title]);

    const trimmedDescription = useMemo(
        () => textTrimmer(description, maxLen.description),
        [description, maxLen.description]
    );

    const expandCardInfo = useCallback((e: SyntheticEvent<EventTarget>) => {
        e.stopPropagation();
        setIsExpanded(val => !val);
    }, []);

    const handleDeleteProduct = useCallback(() => {
        dispatch(deleteProductAction(id));
    }, [id]);
    const isOverflowed = trimmedTitle.localeCompare(title) || trimmedDescription.localeCompare(description);

    return (
        <SProductCard isExpanded={isExpanded}>
            <SImage src={image} alt='Something' />

            <SCardTitle>
                <Link to={`products/${id}`}>{isExpanded ? title : trimmedTitle}</Link>
            </SCardTitle>
            <SCardDescription>
                {isExpanded ? description : trimmedDescription}{' '}
                {isOverflowed && (
                    <SButtonShowHide onClick={expandCardInfo} isExpanded={isExpanded}>
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                    </SButtonShowHide>
                )}
            </SCardDescription>
            <SPriceContainer>
                <SPrice>{price}$</SPrice>
                <SDeleteButtonContainer>
                    <DeleteButton handleDelete={handleDeleteProduct} />
                </SDeleteButtonContainer>
            </SPriceContainer>
        </SProductCard>
    );
};

export default memo(ProductCard);
