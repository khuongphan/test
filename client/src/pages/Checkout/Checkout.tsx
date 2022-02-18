import React from 'react';
import CartComponent from '../../components/features/Cart/Cart';

function Checkout() {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <div>
        <CartComponent></CartComponent>
      </div>
    </div>
  );
}

export default Checkout;
