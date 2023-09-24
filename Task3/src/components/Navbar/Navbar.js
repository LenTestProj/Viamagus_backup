import React from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <Link to={"/"} className={classes.homeLink}>
          Home
        </Link>
      </div>
      <div className={classes.rightSection}>
        <NavLink
          className={({ isActive }) => {
            const tempClasses = [classes.newPostLink];
            isActive && tempClasses.push(classes.activeLink);
            return tempClasses.join(" ");
          }}
          to="/add-product"
        >
          <p className={classes.newPostSection}>Add Product</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            const tempClasses = [classes.cartLink];
            isActive && tempClasses.push(classes.activeLink);
            return tempClasses.join(" ");
          }}
          to={"/cart"}
        >
          <div className={classes.cartSection}>
            <span className={classes.cartText}>
              <p>Your Cart</p>
            </span>
            <span className={classes.cartItemSection}>
              <p className={classes.totalCartItemsQuantity}>{totalCartItems}</p>
              <img
                src="https://i.pinimg.com/originals/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
                alt="test.jpg"
                className={classes.cartIcon}
              />
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
