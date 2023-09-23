import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={classes.cartItemContainer}>
      <div className={classes.cartItemTitle}>
        <p>{item.name}</p>
      </div>
      <section className={classes.cartItemMiniSection}>
        <div className={classes.priceSection}>
          <p>Price</p>
          <p className={classes.priceValue}>USD: {item.price}</p>
        </div>
        <div className={classes.quantitySection}>
          <p>Quantity</p>
          <div className={classes.quantiyButtons}>
            <button className={classes.quantityAddButton}>+</button>
            <p className={classes.quantityValue}>{item.quantity}</p>
            <button className={classes.quantitySubtractButton}>-</button>
          </div>
        </div>
        <div className={classes.deleteItemSection}>
          <button className={classes.deleteItemButton}>
            <p>Delete Item</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
