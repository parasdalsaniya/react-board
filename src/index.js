import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import GlobalLoadingProvider from './assets/Context/useLoader';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalLoadingProvider>
        <App />
      </GlobalLoadingProvider>
    </Provider>
  </React.StrictMode>
);
