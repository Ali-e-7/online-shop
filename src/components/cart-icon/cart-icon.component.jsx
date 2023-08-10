import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";
const CartIcon = () => {
    const {isOpenCart, setIsOpenCart,cartItems} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpenCart(!isOpenCart);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems ? cartItems.length : 0}</span>
    </div>
  );
};
export default CartIcon;
