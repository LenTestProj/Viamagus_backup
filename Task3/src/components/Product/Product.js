import React, { useCallback, useEffect, useState } from "react";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { deleteProduct } from "../../store/slices/ProductsSlice";
import PopupModal from "../PopupModal/PopupModal";

const PopupHeader = "Delete Product";
const PopupBody = "Are you sure you want to delete this Product?";
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

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);
  const [PopupButtons, setPopupButtons] = useState(PopupBtns);

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

  const addProductToCart = (event) => {
    event.preventDefault();
    console.log(product);
    dispatch(addToCart(product));
  };

  const confirmDeleteHandler = useCallback((product) => {
    setOpenDeleteProductModal(false);
    dispatch(deleteProduct(product));
  }, []);

  const closeModal = useCallback(() => {
    setOpenDeleteProductModal(false);
  }, []);

  return (
    <div className={classes.productItemContainer}>
      {openDeleteProductModal && (
        <PopupModal
          onClose={setOpenDeleteProductModal}
          header={PopupHeader}
          body={PopupBody}
          btns={PopupButtons}
          itemToBeDeleted={product}
        />
      )}
      <div className={classes.productItemTitleSection}>
        <p className={classes.productItemTitle}>{product.name}</p>
      </div>
      <section className={classes.productItemMiniSection}>
        <p style={{ fontSize: "1.2rem" }}>USD: {product.price}</p>
        <button
          className={classes.productItemButton}
          onClick={addProductToCart}
        >
          {" "}
          Add to Cart
        </button>
        <button
          className={classes.deleteProductButton}
          onClick={() => setOpenDeleteProductModal(true)}
        >
          {" "}
          Delete Product
        </button>
      </section>
    </div>
  );
};

export default Product;
