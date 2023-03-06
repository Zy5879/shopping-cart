import { useState, useEffect } from "react";
import useShop from "../ShopContext";

function GameCard({ title, price }) {
  const { products, addToCart, removeFromCart } = useShop();
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
    const product = { title, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const buttonCart = isInCart ? "Remove From Cart" : "Add To Cart";

  return (
    <>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={handleClick}>{buttonCart}</button>
    </>
  );
}

export default GameCard;
