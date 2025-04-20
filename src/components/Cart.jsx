import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Cart = () => {
  //use useSelector to display quantity
 const quantity = useSelector((state) => state.cart.totalQuantity);
   //We need to dispatch some actions
   const dispatch = useDispatch();
 //Only show the cart component when there is some items after clicking
  const showCart = () =>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className='cartIcon'>
       <h3 onClick={showCart}>Cart🛒 {quantity} Items</h3> 
    </div>
  )
}

export default Cart