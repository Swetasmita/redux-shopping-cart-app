/* eslint-disable no-unused-vars */
import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
   //We need to dispatch some actions
  const dispatch = useDispatch();
  const addTocart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={addTocart}>Add to Cart</button>
    </div>
  );
};

export default Product;
