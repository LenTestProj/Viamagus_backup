import React, { useState } from "react";
import classes from "./AddProduct.module.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  return (
    <div className={classes.newProductFormContainer}>
      <div className={classes.newProductFormTitle}>
        <p>Add New Product</p>
      </div>
      <form onSubmit={() => alert("submit")}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(event) => setProductName((prev) => event.target.value)}
            className={classes.nameInput}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(event) => setProductPrice((prev) => event.target.value)}
            className={classes.priceInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
