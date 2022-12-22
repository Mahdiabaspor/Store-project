import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CartProvider } from './Context/Cartcontext';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <CartProvider>

        <App />

    </CartProvider>
    </Provider>
  </React.StrictMode>
);
