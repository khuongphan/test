import React from "react";
import ProductList from "../../components/features/ProductList/ProductList";
import { CartComponent } from "../../components/features/Cart/Cart";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <h3>Products</h3>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, paddingRight: "10px", width: "80%" }}>
          <ProductList></ProductList>
        </div>
        <div style={{ flex: 1, paddingRight: "10px", width: "20%" }}>
          <CartComponent></CartComponent>
        </div>
      </div>
      <div style={{display: "block", paddingTop: "50px"}}>
        <div>
        <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
