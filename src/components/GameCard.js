import { useState, useEffect } from "react";
import useShop from "../ShopContext";

function GameCard({ title, price, id, qty }) {
  const { products, addToCart, updateQty } = useShop();
  const [isInCart, setInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.title === title);

    if (productIsInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [products, title]);

  const handleClick = () => {
    const product = { title, price, id, qty };

    if (isInCart) {
      updateQty(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={handleClick} data-testid={id}>
        Add To Cart
      </button>
    </>
  );
}

export default GameCard;
