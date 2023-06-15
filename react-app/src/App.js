import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import GetCurrCart from "./components/Carts/GetCurrCart";
import GetAllProducts from "./components/Products/GetAllProducts";
import GetCurrProducts from "./components/Products/GetCurrProducts";
import CartForm from "./components/Products/CartForm";
import EditQuantity from "./components/Products/EditQuantity";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        <Route exact path="/cart" component={GetCurrCart}></Route>
        <Route exact path="/products/curr" component={GetCurrProducts}></Route>
        <Route exact path="/products/all" component={GetAllProducts}></Route>
        {/* <Route exact path="/cart/update" component={CartForm}></Route> */}
        <Route exact path="/products/:productId/edit" component={EditQuantity}></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
