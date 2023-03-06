import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  function addToCart(product) {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  }
  function removeFromCart(product) {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.title !== product.title
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  }

  function updatePrice(products) {
    let total = 0;
    products.forEach((product) => (total += product.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  }
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

function useShop() {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }
  return context;
}

export default useShop;
