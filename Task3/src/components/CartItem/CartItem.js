import React, { useCallback, useEffect, useState } from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteItemFromCart,
} from "../../store/slices/cartSlice";
import PopupModal from "../PopupModal/PopupModal";

const PopupHeader = "Delete Cart Item";
const PopupBody = "Are you sure you want to delete this Cart Item?";
const PopupBtns = [
  {
    name: "Cancel",
    onClick: () => {},
    styles: { backgroundColor: "red", marginRight: "0.7rem", color: "white" },
  },
  {
    name: "Confirm",
    onClick: () => {},
    styles: { backgroundColor: "green", color: "white" },
  },
];

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [openDeleteCartItemModal, setOpenDeleteCartItemModal] = useState(false);
  const [PopupButtons, setPopupButtons] = useState(PopupBtns);
  console.log(item);

  useEffect(() => {
    setPopupButtons((prev) =>
      prev.map((item, i) => {
        if (i === 0) {
          item.onClick = closeModal;
        } else {
          item.onClick = confirmDeleteHandler;
        }
        return item;
      })
    );
  }, [closeModal, confirmDeleteHandler]);

  const addCartItem = (event) => {
    event.preventDefault();
    dispatch(addToCart(item));
  };

  const confirmDeleteHandler = useCallback((item) => {
    setOpenDeleteCartItemModal(false);
    dispatch(deleteItemFromCart(item));
  }, []);

  const reduceCartItem = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(item));
  };

  const closeModal = useCallback(() => {
    setOpenDeleteCartItemModal(false);
  }, []);

  // const deleteItemFromTheCart = (event) => {
  //   event.preventDefault();
  //   dispatch(deleteItemFromCart(item));
  // };

  return (
    <div className={classes.cartItemContainer}>
      {openDeleteCartItemModal && (
        <PopupModal
          onClose={setOpenDeleteCartItemModal}
          header={PopupHeader}
          body={PopupBody}
          btns={PopupButtons}
          itemToBeDeleted={item}
        />
      )}
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
            <button className={classes.quantityAddButton} onClick={addCartItem}>
              +
            </button>
            <p className={classes.quantityValue}>{item.quantity}</p>
            <button
              className={classes.quantitySubtractButton}
              onClick={reduceCartItem}
            >
              -
            </button>
          </div>
        </div>
        <div className={classes.deleteItemSection}>
          <button
            className={classes.deleteItemButton}
            onClick={() => setOpenDeleteCartItemModal(true)}
          >
            <p>Delete Item</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
