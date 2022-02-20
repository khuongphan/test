import React from "react";
import ProductList from "../../components/features/ProductList/ProductList";
import { CartComponent } from "../../components/features/Cart/Cart";

function Products() {
  return (
    <div className="products">
      <h3>Products</h3>
      <div style={{ display: "flex" }}>
        <div style={{ flexShrink: 1, paddingRight: "10px", flex: "80%" }}>
          <ProductList></ProductList>
        </div>
        <div style={{ flexShrink: 1, paddingRight: "10px", flex: "20%" }}>
          <CartComponent showCheckout={true}></CartComponent>
        </div>
      </div>
    </div>
  );
}

export default Products;
