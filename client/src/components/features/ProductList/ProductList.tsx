import React from 'react';
import { useAppSelector } from '../../../app/hook';
import { selectCart } from '../Cart/cartSlice';
import ProductComponent from './Product';
import { Cart, Product } from '../types';
import { connect, ConnectedProps } from 'react-redux';



const mapState = (state: Cart) => {
  return { products : state.products };
};

const mapDispatch = {
  
}

export function ProductList() {
  const cart = useAppSelector(selectCart);

  return (
    <div>
      {
        cart.products.map((item, index) => {
          <ProductComponent
            id={item.id}
            name={item.name}
            count={0}
            price={item.price} />
        })
      }
    </div>
  );
}

const connector = connect(mapState, mapDispatch);

export default connector(ProductList);