import { useEffect } from "react";
import { useAppSelector } from "../../../app/hook";
import { selectCart } from "./cartSlice";
import {
  reduceProduct,
  removeItem,
  removeAllItems,
  addProduct,
  updateCostAsync,
} from "../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { Product, Country } from "../../../app/types";
import CountryComponent from "../Country/country";
import { getCountry } from "../../../app/const";
import Button from "antd/lib/button";
import { CalculateTotalCost } from "../../../app/helper";
import { Link, useNavigate } from "react-router-dom";
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row } from "antd";

export interface CartComponentProps {
  showCheckout: boolean
}

export function CartComponent(props: CartComponentProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showCheckout = props.showCheckout;
  const cart = useAppSelector(selectCart).cart;
  const country = cart.country ?? getCountry("AU");
  
  const totalCost = CalculateTotalCost(cart);
  const totalWithDeliveryCost = totalCost + cart.deliveryCost;

  const ReduceProduct = (product: Product) => {
    dispatch(reduceProduct(product));
  };

  const RemoveProductFromCart = (product: Product) => {
    dispatch(removeItem(product));
  };

  const AddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const RemoveAllProducts = () => {
    dispatch(removeAllItems());    
  };

  useEffect(() => {
    dispatch(updateCostAsync(cart));
  }, [cart.items, cart.country]);

  return (
    <div>
      <div>
        <p>Country &nbsp;
          <CountryComponent
            name={country?.name}
            code={country?.code}
            currency={country.currency}
          ></CountryComponent>
        </p>
        {cart.items.map((item) => {
          var product: Product = item.product;
          return (
            <Row justify="start" key={item.product.id}>
              <Col span={6}><b>{item.product.name}</b></Col>
              <Col  span={4}>Quantity: {item.count}</Col>
              <Col span={8}>  
                <Button type="text" onClick={() => AddProduct(product)}><PlusOutlined /></Button>
                <Button type="text" onClick={() =>  ReduceProduct(product)}><MinusOutlined /></Button>
                <Button type="ghost" onClick={() =>  RemoveProductFromCart(product)}><CloseOutlined style={{ color: 'red'}}/></Button>
              </Col>
            </Row>
          );
        })}
      </div>
      <p style={{textAlign: 'right'}}>{ cart.items.length > 0 && <p><button onClick={() => RemoveAllProducts()}>Remove All</button></p>}
       </p>
      <hr></hr>
      <Row><Col span={2}>Price:</Col><Col span={2} style={{textAlign: "right"}}>{totalCost.toFixed(2)} {cart.country.currency}</Col></Row>
      <Row><Col span={2}>Delivery Cost:</Col><Col span={2} style={{textAlign: "right"}}>{cart.deliveryCost.toFixed(2)} {cart.country.currency}</Col></Row>
      <Row><Col span={2}>TotalCost:</Col><Col span={2} style={{textAlign: "right"}}><b>${totalWithDeliveryCost.toFixed(2)} {cart.country.currency}</b> </Col></Row>
      
      <div style={{display: "block", paddingTop: "50px"}}>
      {(showCheckout && <div><Button type="primary" onClick={() => navigate('/checkout')}>Checkout</Button></div>)}
      </div>
    </div>
  );
}

export default CartComponent;
