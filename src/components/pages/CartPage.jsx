import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartBox from '../CartBox';

const CartPage = () => {
  return (
    <div className="container">
      <CartBox />
    </div>
  );
};

export default CartPage;
