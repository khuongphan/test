import "./App.css";
import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import CheckoutComplete from "./pages/Checkout/CheckoutComplete";
import Right from "./components/layout/Right/Right";

const { Header, Content, Footer, Sider } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    isMenu: true,
    main: () => (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/products",
    text: "Products",
    isMenu: true,
    main: () => (
      <div>
        <Products />
      </div>
    ),
  },
  {
    path: "/checkout",
    text: "Checkout",
    isMenu: false,
    main: () => (
      <div>
        <Checkout />
      </div>
    ),
  },
  {
    path: "/checkoutcomplete",
    isMenu: false,
    sidebar: () => <div>cart</div>,
    main: () => (
      <div>
        <CheckoutComplete />
      </div>
    ),
  },
];

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {routes
              .filter((x) => x.isMenu)
              .map((_, index) => {
                return (
                  <Menu.Item key={index + 1}>
                    <Link to={_.path}>{_.text}</Link>
                  </Menu.Item>
                );
              })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-background">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.main />} />
              ))}
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Khuong Phan</Footer>
      </Layout>
    </Router>
  );
}

export default App;
