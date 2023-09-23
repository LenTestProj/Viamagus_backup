import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import classes from "./Products.module.css";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className={classes.container}>
      <p className={classes.header}>Products</p>
      <ul className={classes.list}>
        {products.map((prod, i) => (
          <li key={i}>
            <Product product={prod} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
