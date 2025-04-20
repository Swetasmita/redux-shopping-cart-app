import React from "react";
import Header from "./Header";
import "./Layout.css"
import Products from "./Products";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {
    let total = 0;
    //use useSelector to display Cart items
    const showCart =  useSelector((state) => state.cart.showCart);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const itemsList = useSelector((state) => state.cart.itemsList);

    itemsList.forEach(item => {
      total += item.totalPrice;
    });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCart && totalQuantity > 0 && <CartItems />}
     
        <div className="total-price">
         <h3>Total: ${total}</h3>
         <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
