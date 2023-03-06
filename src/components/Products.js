import games from "../games";
import useShop from "../ShopContext";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";

function Products() {
  const { products, addToCart, removeFromCart } = useShop();
  const { isInCart, setItInCart } = useState(false);

  return (
    <div>
      {games.map((item) => (
        <GameCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Products;

//   useEffect(() => {
//     const productIsInCart = products.find((product) => product.title === title);

//     if (productIsInCart) {
//       setIsInCart(true);
//     } else {
//       setIsInCart(false);
//     }
//   }, [products, title]);

//   function handleClick() {}
//   const gamesMap = games.map((item) => {
//     return (
//       <div key={item.id}>
//         <p>{item.title}</p>
//         <p>{item.price}</p>
//         <button onClick={(event) => handleClick(event, item.id)}>
//           Add to Cart
//         </button>
//       </div>
//     );
//   });
