import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetails";
import ProductList from './components/ProductList/ProductList';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <ProductList /> },
    { path: "/product/:productId", element: <ProductDetail /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;