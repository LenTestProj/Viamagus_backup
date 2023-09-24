import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const totalPrice =
      cartItems.length > 0
        ? cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
        : 0;
    setCartTotal(totalPrice);
  }, [cartItems]);

  const addDiscountToTotalPrice = (event) => {
    event.preventDefault();
    if (discountValue > 0 && discountValue < 100) {
      const totalPrice = cartTotal * (1 - discountValue / 100);
      setShowDiscountForm(false);
      setCartTotal(totalPrice);
    } else {
      alert("enter a valid number");
    }
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.header}>Cart Items</h4>
      <ul className={classes.list}>
        {cartItems.map((item, i) => (
          <li key={i}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      <h4 className={classes.footer}>Total Price: USD {cartTotal} </h4>
      {!showDiscountForm && (
        <div className={classes.addDiscountSection}>
          <button
            className={classes.addDiscountButton}
            onClick={() => setShowDiscountForm(true)}
            disabled={!(cartTotal > 0)}
          >
            Add Discount
          </button>
        </div>
      )}
      {showDiscountForm && (
        <div className={classes.updateDiscountSection}>
          <form className={classes.form} onSubmit={addDiscountToTotalPrice}>
            <label>Enter the discount value: </label>
            <input
              type="number"
              value={discountValue}
              onChange={(event) =>
                setDiscountValue((prev) => event.target.value)
              }
            />
            <div className={classes.discountCancelUpdateButtonSection}>
              <button
                onClick={() => setShowDiscountForm(false)}
                className={classes.discountCancelButton}
              >
                Cancel
              </button>
              <button className={classes.discountUpdateButton}>
                Update Discount
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
