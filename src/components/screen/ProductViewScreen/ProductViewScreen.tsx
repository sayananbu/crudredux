import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductModel } from '../../../models/product.model';
import { selectProducts } from '../../../models/state/products/product.selectors';
import { deleteProductAction } from '../../../store/product/product.slice';
import DeleteButton from '../../deleteButton/DeleteButton';
import {
    SFooterContainer,
    SFullDeleteButtonContainer,
    SFullDescription,
    SFullPrice,
    SFullTitle,
    SImageView,
    SProductError,
    SProductViewContainer,
} from './styles/productviewscreen.styles';

type ProductViewScreenProps = {};
const ProductViewScreen: FC<ProductViewScreenProps> = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsList = useSelector(selectProducts);
	
    const product: Partial<ProductModel> & { error?: string } = productsList.find(
        val => Number(params.productId) === val.id
    ) || {
        error: 'Error product not found ',
    };

    const handleDeleteProduct = useCallback(() => {
        if (product.id) dispatch(deleteProductAction(product.id));
        navigate('/crudredux');
    }, [product.id]);
    return (
        <SProductViewContainer>
            {product.error ? (
                <SProductError>{product.error}</SProductError>
            ) : (
                <>
                    <SImageView src={product.image} />
                    <SFullTitle>{product.title}</SFullTitle>
                    <SFullDescription>{product.description}</SFullDescription>
                    <SFooterContainer>
                        <SFullPrice>{product.price}$</SFullPrice>
                        <SFullDeleteButtonContainer>
                            <DeleteButton handleDelete={handleDeleteProduct} />
                        </SFullDeleteButtonContainer>
                    </SFooterContainer>
                </>
            )}
        </SProductViewContainer>
    );
};

export default memo(ProductViewScreen);
