import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { selectCart } from "./cartSlice";
import {
  reduceProduct,
  removeProduct,
  removeAllProducts,
  addProduct
} from "../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../types";

export function CartComponent() {
  const dispatch = useDispatch();
  const cart = useAppSelector(selectCart);

  const ReduceProduct = (product: Product) => {
    dispatch(reduceProduct(product));
  };

  const RemoveProductFromCart = (product: Product) => {
    dispatch(removeProduct(product));
  };

  const AddProduct = (product: Product) => {
      dispatch(addProduct(product));
  }

  const RemoveAllProducts = () => {
    dispatch(removeAllProducts());
  };
  useEffect(() => {});

  return (
    <div>
      <p>Cart</p>
      <div>
        {cart.products.map((item) => {
          return (
            <div key={item.id}>
              <div>name: {item.name}</div>
              <div>count: {item.count} &nbsp;&nbsp;&nbsp;<button onClick={() => AddProduct(item)}>+</button>&nbsp;&nbsp;<button onClick={() => ReduceProduct(item)}>-</button>&nbsp;
                <button onClick={() => RemoveProductFromCart(item)}>
                  Remove
                </button>
</div>
              <div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => RemoveAllProducts()}>Remove All</button>
      </div>
      <hr></hr>
    </div>
  );
}

export default CartComponent;
