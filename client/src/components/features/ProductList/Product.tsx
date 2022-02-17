import React from 'react';
import { Product } from '../types';
import { addProduct } from '../../features/Cart/cartSlice'; 

function AddCart(product: Product) {
    console.log(`id: ${product.id}`);
    addProduct(product);
}

function ProductComponent (product: Product) {
  return (
    <div>
      <div>Id: {product.id}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div><button onClick={() => AddCart(product) }></button></div>
    </div>
  );
}

export default ProductComponent;