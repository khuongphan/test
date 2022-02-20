import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { useAppSelector } from '../../app/hook';
import { selectOperation } from '../../components/features/Operation/Operation';

function CheckoutComplete() {
  const state = useAppSelector(selectOperation);
  const isSuccess = state.operation.name === 'placeOrder' && state.status === 'idle' && state.operation.result != null;

  useEffect(() => {});
  
  return (
    <div className="cart">
      <h3>Cart</h3>
      <div>
        {isSuccess && <Alert message="Order has been placed successfully" type="success" />}
        {!isSuccess && <Alert message={ state.operation.result } type="error" />}
      </div>
    </div>
  );
}

export default CheckoutComplete;
