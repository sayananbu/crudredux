import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import GlobalStyles from './globalStyles/global.styles';
import { productsStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
            <Provider store={productsStore}>
                <App />
                <GlobalStyles />
            </Provider>
    </React.StrictMode>
);
