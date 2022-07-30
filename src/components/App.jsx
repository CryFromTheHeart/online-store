import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes.js';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path={routes.storePagePath()} element={<StorePage />} />
      <Route path={routes.cartPagePath()} element={<CartPage />} />\
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
