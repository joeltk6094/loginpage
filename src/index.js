
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './redux/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Add this line to enable Redux DevTools
  devTools: process.env.NODE_ENV !== 'production', // This enables DevTools only in development
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
