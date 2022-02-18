import React from "react";
import { Product } from "../types";
import { addProduct, removeProduct } from "../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductComponent(product: Product) {
  const dispatch = useDispatch();
  const AddToCart = (product: Product) => {
    dispatch(addProduct(product));
  };
  const RemoveFromCart = (product: Product) => {
      dispatch(removeProduct(product));
  };

  console.log("product", product);
  return (
    <div>
      <div>Id: {product.id}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>
        <button onClick={() => AddToCart(product)}>Add</button>
      </div>
    </div>
  );
}

export default ProductComponent;
