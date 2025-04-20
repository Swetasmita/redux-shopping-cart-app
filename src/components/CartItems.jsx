import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {/* <CartItem id={1} name={"mac"} price={2500}/> */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              total={item.totalPrice}            
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
