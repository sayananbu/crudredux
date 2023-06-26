import { memo } from 'react';
import MarketPlaceScreen from './components/screen/MarketPlaceScreen/MarketPlaceScreen';
import { SApp } from './globalStyles/app.styles';

function App() {
    return (
            <SApp>
                <MarketPlaceScreen />
            </SApp>
    );
}

export default memo(App);
