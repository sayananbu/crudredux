import { FC, memo, useCallback, useState } from 'react';
import { SMarketPlaceScreenContainer } from './styles/marketplacescreen.styles';
import ProductList from '../../productsList/ProductsList';
import Alert from '@mui/material/Alert';
import useProducts from '../../../hooks/useProducts';
import AddItemModal from '../../modals/AddItemModal';
import CreateButton from '../../createButton/CreateButton';
import Loader from '../../loader/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductViewScreen from '../ProductViewScreen/ProductViewScreen';

type MarketPlaceScreenProps = {};
const MarketPlaceScreen: FC<MarketPlaceScreenProps> = () => {
    const { isLoaded, error } = useProducts();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleCloseModal = useCallback(() => setModalIsOpen(false), []);
    const handleOpenModal = useCallback(() => setModalIsOpen(true), []);
    const displayDataState = useCallback(() => {
        return isLoaded ? (
            <>
                <ProductList />
                <AddItemModal open={modalIsOpen} handleCloseModal={handleCloseModal} />
                <CreateButton handleOpenModal={handleOpenModal} />
            </>
        ) : error.length ? (
            <Alert severity='error'>{error}</Alert>
        ) : (
            <Loader size={150} />
        );
    }, [isLoaded, error, modalIsOpen, handleCloseModal, handleOpenModal]);

	return (
		<Router>
            <Routes>
                <Route
                    path='/crudredux'
                    element={
                        <SMarketPlaceScreenContainer>{displayDataState()}</SMarketPlaceScreenContainer>
                    }
                />
                <Route
                    path='products/:productId'
                    element={<ProductViewScreen />}
                />
            </Routes>
        </Router>
	)
};

export default memo(MarketPlaceScreen);
