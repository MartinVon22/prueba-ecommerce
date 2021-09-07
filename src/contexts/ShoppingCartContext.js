import React from "react";

export const ShoppingCartContext = React.createContext({
  cartProducts: [],
  setCartProducts: (state) => {},
});
