import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MainLayout from "./components/layout/Main/Main";
import Left from "./components/layout/Right/Right";
import Header from "./components/layout/Header/Header";
import "./App.css";

import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Right from "./components/layout/Right/Right";


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <div><Home/></div>
  },
  {
    path: "/products",
    main: () => <div><Products></Products></div>
  },
  {
    path: "/cart",
    sidebar: () => <div>cart</div>,
    main: () => <div><Checkout></Checkout></div>
  }
];

function App() {
  return (
    <Router>
       <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px", width: "60%"}}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={< route.main />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
