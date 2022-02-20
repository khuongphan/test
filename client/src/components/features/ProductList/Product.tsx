import React from "react";
import { Button, Card } from "antd";
import { Product } from "../../../app/types";
import { addProduct, updateCostAsync } from "../../features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductProps } from "./ProductProp";
import { PlusOutlined } from '@ant-design/icons';

function ProductComponent({ product, currency }: ProductProps) {
  const dispatch = useDispatch();
  const AddToCart = (product: Product) => {
    dispatch(addProduct(product));
  };

  return (
    <Card title={product.name} style={{ width: 300 }}
    actions ={[
      <Button type="ghost" key="addProduct" onClick={() => AddToCart(product)}><PlusOutlined/>Add</Button>
    ]}
    >
      <p>Product Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>
        Price: {product.price.toFixed(2)} {currency}
      </p>
    </Card>
  );
}

export default ProductComponent;
