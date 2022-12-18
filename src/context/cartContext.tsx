import { createContext, ReactNode, useContext, useState } from "react";
import { CartItemType, Product } from "../../TYPES";
import { data } from "../../data";

type ICartContext = {
  products: Product[];
  cartItems: CartItemType[];
  addToCart: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
};

const defaultValue = {
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

export const CartContext = createContext<ICartContext>(defaultValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [products, setProducts] = useState<Product[]>(data);
  const itemExist = (id: number) =>
    cartItems.find((item: CartItemType) => item?.id === id);

  const addToCart = (id: number, qty: number) => {
    if (itemExist(id)) {
      let newState = cartItems.map((item: CartItemType) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + qty,
          };
        } else {
          return item;
        }
      });
      setCartItems([...newState]);
    } else {
      setCartItems([...cartItems, { id, qty }]);
    }
  };
  const removeFromCart = (id: number) => {
    if (itemExist(id)) {
      setCartItems([...cartItems.filter((item) => item.id !== id)]);
    }
    return;
  };
  const value = { cartItems, addToCart, removeFromCart, products };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
