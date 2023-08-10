import { createContext, useState } from "react";
const addCardItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isOpenCart: false,
  setIsOpenCart: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCardItem(cartItems, productToAdd));
  };
  const value = { isOpenCart, setIsOpenCart,cartItems,addItemToCart};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
