import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import ProductsGrid from "../../components/productsGrid/productsGrid";
import ProductPage from "../../components/productPage/productPage";
import CartPage from '../../components/cartPage/cartPage'
import Home from '../../components/homePage/home'
import CheckoutPage from '../../components/checkoutPage/checkoutPage'

export default class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div id="App-Container">
          <NavBar />
          <Switch>
            <Route path ='/' exact component={Home}/>
            <Route path="/products" exact component={ProductsGrid} />
            <Route path="/products/:name" component={ProductPage} />
            <Route path='/cart' component={CartPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
