import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';
import Normalize from 'react-normalize';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Normalize />
    <App />
  </Provider>
);
