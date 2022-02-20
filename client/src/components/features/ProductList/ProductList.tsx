import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import ProductComponent from "./Product";
import { loadingProductListAsync, selectProductList } from "./ProductListSlice";
import { selectCart } from "../Cart/cartSlice";
import { Col, Row, Space } from "antd";

export function ProductList() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectProductList);
  const country = useAppSelector(selectCart).cart.country;

  useEffect(() => {
    dispatch(loadingProductListAsync(country));
  }, [productList.length, country.code]);


  return (
    <div>
      <Row justify="start" align="top">
      <Space size="middle">
        {productList.map((item) => {
          return (
            <Col span={6} key={item.id}><ProductComponent product={item} currency={country.currency} key={item.id}/></Col>
          );
        })}
        </Space>
      </Row>
    </div>
  );
}

export default ProductList;
