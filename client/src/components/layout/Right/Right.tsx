import React from 'react';
import './Right.css';
import CartComponent from '../../features/Cart/Cart';

function Right() {
  return (
    <div className="right-layout">
      <CartComponent showCheckout={true}></CartComponent>
    </div>
  );
}

export default Right;
