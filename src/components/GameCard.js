import { useState, useEffect } from "react";
import useShop from "../ShopContext";

function GameCard({ title, price, id, qty, img }) {
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
    const product = { title, price, id, qty, img };

    if (isInCart) {
      updateQty(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-sm">
      <img className="w-full aspect-square rounded-sm" src={img} alt={title} />
      <div className="p-3">
        <p className="text-sm">{title}</p>
        <p className="text-sm mb-3">${price}</p>
        <button
          className="p-2 border-2 border-orange-700 text-orange-700 rounded-sm"
          onClick={handleClick}
          data-testid={id}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default GameCard;
