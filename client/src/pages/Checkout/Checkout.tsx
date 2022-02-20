import { Button , message} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import CartComponent from '../../components/features/Cart/Cart';
import { placeOrder } from '../../components/features/Cart/cartAPI';
import { removeAllItems, selectCart } from '../../components/features/Cart/cartSlice';
import { placeOrderSuccessful, placeOrderFailed, placingOrder } from '../../components/features/Operation/Operation';

function Checkout() {

  const cart = useAppSelector(selectCart).cart;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const PlaceOrder = () => {
    if (cart.items.length > 0){
      // Place Order
      dispatch(placingOrder());
      placeOrder(cart)
      .then((result) => {
        dispatch(placeOrderSuccessful(result.data));
        dispatch(removeAllItems());
        navigate("/checkoutcomplete");
      })
      .catch((error) => {
        dispatch(placeOrderFailed());
        message.error(error);
      });
    }
    else {
      message.error("There's no item in the cart ");
    }
  }

  return (
    <>
      <h3>Checkout</h3>
      <div>
        <CartComponent showCheckout={false}></CartComponent>
      </div>
      <div>
        <Button type="primary" onClick={() => PlaceOrder()}>Place Order</Button>
      </div>
    </>
  );
}

export default Checkout;
