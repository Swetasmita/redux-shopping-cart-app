import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useEffect, useRef  } from "react";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // Ref to track the first render
  const isFirstRender = useRef(true);

  /* Real time firebase URL-https://redux-http-4d11c-default-rtdb.firebaseio.com/
Hey Firebase, store my data inside a folder/ node called cartItems in your Realtime Database.
It expects REST API style URLs (everything ends with .json).
/cartItems.json/cart.json/shoppingCart.json
method:"put" any data is modified in the state, the firebase can access the modified
state from the redux.
we will add a body and the body contains a Json obj. We will send it the backend
whenever we change something in cart of Redux, the useEffect will notify 
and it send the request to the backend which is Firebase.
*/
  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          type: "warning",
          message: "Sending cart data request...",
          isOpen: true,
        })
      );
      try {
        const res = await fetch(
          "https://redux-http-4d11c-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log("Response Data:", data);

        //send state as request is successful
        dispatch(
          uiActions.showNotification({
            type: "success",
            message: "Cart data sent successfully!",
            isOpen: true,
          })
        );
      } catch (error) {
        //send state as error
        dispatch(
          uiActions.showNotification({
            type: "error",
            message: "Failed to send cart data!",
            isOpen: true,
          })
        );
        console.error("Error:", error);
      }
    };
    sendRequest();
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {isLoggedIn && <Layout />}
      {!isLoggedIn && <Auth />}
    </div>
  );
}

export default App;
