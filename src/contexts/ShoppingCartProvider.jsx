import React, {  useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const ShoppingCartProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const contextValues = {
    cartProducts,
    setCartProducts,
  };

  return (
    <ShoppingCartContext.Provider value={contextValues}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
