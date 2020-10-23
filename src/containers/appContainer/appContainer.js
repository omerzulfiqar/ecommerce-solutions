import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
// import ProductsGrid from "../../components/productsGrid/productsGrid";
import ProductPage from '../../components/productPage/productPage'

export default class AppContainer extends Component {
  render() {
    return (
      <div id="App-Container">
        <div id="navContainer">
          <NavBar />
        </div>
        <div id="productsContainer">
          <ProductPage />
        </div>
      </div>
    );
  }
}
