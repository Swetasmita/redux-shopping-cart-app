/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  //We need to dispatch some actions
  const dispatch = useDispatch();
//increment icon 
  const incrementCartItems = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  //Decrement icon
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));   
    };
    
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price}</p>
      <p> x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={incrementCartItems}>
        {" "}
        +{" "}
      </button>
      <button className="cart-actions" onClick={decrementCartItems}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default CartItem;
