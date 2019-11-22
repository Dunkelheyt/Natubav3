import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Conocenos from "./Conocenos";
import Productos from "./Productos";
import ProductosChips from "./ProductosChips";
import ProductosChipsPaginaDesc from "./ProductosChipsPaginaDesc";
import ProductosMix from "./ProductosMix";
import HeaderContainer from "./components/header/HeaderContainer";
import ProductosMixPaginaDesc from "./ProductosMixPaginaDesc";

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
      </div>
    );
  }
}

export default App;
