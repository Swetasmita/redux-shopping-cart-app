import { createSlice } from "@reduxjs/toolkit";
  /* Handle all of the states of the notification into the Redux*/
const uiSlice = createSlice({
  name: 'ui',
  initialState: {notification: null},
  reducers: {
	showNotification(state, action) {
  state.notification = {
        type: action.payload.type,
        message: action.payload.message,
        isOpen: action.payload.isOpen
    };
  },
}
});

export const uiActions = uiSlice.actions;
export default uiSlice;