import React from "react";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = (event) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={classes.productItemContainer}>
      <p className={classes.productItemTitle}>{product.name}</p>
      <section className={classes.productItemMiniSection}>
        <p style={{ fontSize: "1.2rem" }}>USD: {product.price}</p>
        <button
          className={classes.productItemButton}
          onClick={addProductToCart}
        >
          {" "}
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default Product;
