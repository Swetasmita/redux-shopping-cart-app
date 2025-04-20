import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
//In handleClose, I dispatch to close the notification.
  const handleClose = () => {
    dispatch(uiActions.showNotification({ isOpen: false }));
  };

  return (
    <div>
      {notification.isOpen && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
