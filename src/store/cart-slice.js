import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      //add a  new item
      const newItem = action.payload;
      //check if the new item is already there, so increment the item
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      //if not existing item, then add a new item
      if (!existingItem) {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      // if there is 1 item in the cart, Remove the item
      //Update the state array with all items EXCEPT the one with the matching id.
      //remove the match id. store other items
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -=  existingItem.price;
        state.totalQuantity--; 
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
