import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children, id }) {
  const [cart, setCart] = useState();

  const value = {
    chuj: "O ty chuju",
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
