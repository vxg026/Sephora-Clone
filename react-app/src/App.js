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
import AddToCart from "./components/Products/AddToCart";
import GetCurrReviews from "./components/Reviews/GetCurrReviews";
import GetOneProduct from "./components/Products/GetOneProduct";
import CreateReview from "./components/Reviews/CreateReview";
import Home from "./components/Products/HomePage";
import Suncscreen from "./components/Products/Sunscreen";
import Makeup from "./components/Products/Makeup";
import Hair from "./components/Products/Hair";
import Fragrance from "./components/Products/Fragrance";
import Skincare from "./components/Products/Skincare";

import Body from "./components/Products/Body";
import Shipped from "./components/Products/Shipped";
import GetCurrLikes from "./components/Products/Likes";

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
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products/likes" component={GetCurrLikes}></Route>
        <Route exact path="/cart" component={GetCurrCart}></Route>
        <Route exact path="/products/curr" component={GetCurrProducts}></Route>
        <Route exact path="/products/all" component={GetAllProducts}></Route>
        {/* <Route exact path="/cart/update" component={CartForm}></Route> */}
        <Route exact path="/products/:productId/edit" component={EditQuantity}></Route>
        {/* <Route exact path="/products/:productId/cart" component={EditQuantity}></Route> */}
        <Route exact path="/products/makeup" component={Makeup}></Route>
        <Route exact path="/products/sunscreen" component={Suncscreen}></Route>
        <Route exact path="/products/hair" component={Hair}></Route>
        <Route exact path="/products/fragrance" component={Fragrance}></Route>
        <Route exact path="/products/skincare" component={Skincare}></Route>
        <Route exact path="/products/body" component={Body}></Route>
        <Route exact path="/products/shipped" component={Shipped}></Route>

        <Route exact path="/reviews/curr" component={GetCurrReviews}></Route>
        <Route exact path="/products/:productId" component={GetOneProduct}></Route>
        {/* <Route exact path="/products/:productId/reviews/new" component={GetOneProduct}></Route> */}

        </Switch>
      )}
    </>
  );
}

export default App;
