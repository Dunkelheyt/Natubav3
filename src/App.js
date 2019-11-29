import React, { Component } from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import Main from "./Main";
import Conocenos from "./components/social/Conocenos";

import Productos from "./components/productPages/Productos";
import ProductosChips from "./components/productPages/ProductosChips";
import ProductosChipsPaginaDesc from "./components/productPages/ProductosChipsPaginaDesc";
import ProductosMix from "./components/productPages/ProductosMix";
import ProductosMixPaginaDesc from "./components/productPages/ProductosMixPaginaDesc";

import Bowls from "./components/productPages/Bowls";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={Main} />
        <Route exact path="/conocenos" component={Conocenos} />
        <Route exact path="/productos" component={Productos} />

        <Route exact path="/productos/chips" component={ProductosChips} />
        <Route
          exact
          path="/productos/chips/:item_id"
          component={ProductosChipsPaginaDesc}
        />
        <Route exact path="/productos/mix" component={ProductosMix} />
        <Route
          exact
          path="/productos/mix/:item_id"
          component={ProductosMixPaginaDesc}
        />

        <Route exact path="/productos/bowls" component={Bowls} />
      </div>
    );
  }
}

export default App;
