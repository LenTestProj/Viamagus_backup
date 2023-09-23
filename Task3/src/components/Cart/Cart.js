import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className={classes.container}>
      <p className={classes.header}>Cart Items</p>
      <ul className={classes.list}>
        {cartItems.map((item, i) => (
          <li key={i}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
