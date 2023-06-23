import { FC, SyntheticEvent, memo, useCallback, useMemo, useState } from 'react';
import { SButtonShowHide, SCardDescription, SCardTitle, SImage, SPrice, SProductCard } from './styles/card.styles';
import { ProductModel } from '../../../models/product.model';
import textTrimmer from '../../../utils/textTrimmer';

type ProductCardProps = ProductModel;
const ProductCard: FC<ProductCardProps> = ({ title, price, description, image }) => {
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
    const isOverflowed = trimmedTitle.localeCompare(title) || trimmedDescription.localeCompare(description);
    return (
        <SProductCard isExpanded={isExpanded}>
            <SImage src={image} alt='Something' />
            <SCardTitle>{isExpanded ? title : trimmedTitle}</SCardTitle>
            <SCardDescription>
                {isExpanded ? description : trimmedDescription}{' '}
                {isOverflowed && (
                    <SButtonShowHide onClick={expandCardInfo} isExpanded={isExpanded}>
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                    </SButtonShowHide>
                )}
            </SCardDescription>
            <SPrice>{price}$</SPrice>
        </SProductCard>
    );
};

export default memo(ProductCard);
