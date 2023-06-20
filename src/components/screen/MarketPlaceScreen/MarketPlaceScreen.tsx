import { FC, memo, useCallback } from 'react';
import { SMarketPlaceScreenContainer } from './styles/marketplacescreen.styles';
import ProductList from '../../productsList/ProductsList';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import useProducts from '../../../hooks/useProducts';

type MarketPlaceScreenProps = {};
const MarketPlaceScreen: FC<MarketPlaceScreenProps> = () => {
    const { isLoaded, error } = useProducts();

    const displayDataState = useCallback(() => {
        return isLoaded ? (
            <ProductList />
        ) : error.length ? (
            <Alert severity='error'>{error}</Alert>
        ) : (
            <CircularProgress size={150} />
        );
    }, [isLoaded, error]);

    return <SMarketPlaceScreenContainer>{displayDataState()}</SMarketPlaceScreenContainer>;
};

export default memo(MarketPlaceScreen);
