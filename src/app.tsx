import React, { memo } from 'react';
import { Provider } from 'react-redux';
import MarketPlaceScreen from './components/screen/MarketPlaceScreen/MarketPlaceScreen';
import { SApp } from './globalStyles/app.styles';
import { productsStore } from './store/store';

function App() {
    return (
        <Provider store={productsStore}>
            <SApp>
                <MarketPlaceScreen />
            </SApp>
        </Provider>
    );
}

export default memo(App);
