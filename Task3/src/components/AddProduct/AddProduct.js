import React, { useState } from "react";
import classes from "./AddProduct.module.css";
import { addProduct } from "../../store/slices/ProductsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [inputIsTouched, setIsInputTouched] = useState({
    isNameInputTouched: false,
    isPriceInputTouched: false,
  });
  const nameInputHasError =
    productName.length === 0 && inputIsTouched.isNameInputTouched;
  const priceInputHasError =
    !(productPrice > 0) && inputIsTouched.isPriceInputTouched;
  const submitButtonIsActive = productName.length > 0 && productPrice > 0;

  const AddProduct = (event) => {
    event.preventDefault();
    if (submitButtonIsActive) {
      const newProduct = {
        name: productName,
        price: productPrice,
      };
      dispatch(addProduct(newProduct));
      navigate("/");
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.newProductFormContainer}>
        <div className={classes.newProductFormTitle}>
          <p>Add New Product</p>
        </div>
        <form onSubmit={AddProduct}>
          <div className={classes.nameSection}>
            <label className={classes.nameText}>Name:</label>
            <div className={classes.nameInput}>
              {nameInputHasError && (
                <p className={classes.error}>Enter a valid name</p>
              )}
              <input
                type="text"
                value={productName}
                className={classes.nameInputField}
                onChange={(event) =>
                  setProductName((prev) => event.target.value)
                }
                onBlur={() =>
                  setIsInputTouched({
                    ...inputIsTouched,
                    isNameInputTouched: true,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.priceSection}>
            <label className={classes.priceText}>Price:</label>
            <div className={classes.priceInput}>
              {priceInputHasError && (
                <p className={classes.error}>Enter a valid Price</p>
              )}
              <input
                type="number"
                value={productPrice}
                className={classes.priceInputField}
                onChange={(event) =>
                  setProductPrice((prev) => event.target.value)
                }
                onBlur={() =>
                  setIsInputTouched({
                    ...inputIsTouched,
                    isPriceInputTouched: true,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.submitButtonSection}>
            <button
              type="submit"
              className={
                classes.submitButton +
                " " +
                (!submitButtonIsActive ? classes.disabled : "")
              }
              disabled={!submitButtonIsActive}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
