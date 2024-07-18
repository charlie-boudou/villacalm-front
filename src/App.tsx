import './styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Layout } from './pages/Layout';
import React from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import images from './reducers/images';

const store = configureStore({
  reducer: { images },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Router/>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
