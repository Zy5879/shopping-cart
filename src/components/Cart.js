import useShop from "../ShopContext";
import GameCard from "./GameCard";

function Cart() {
  const { products } = useShop();
  return (
    <>
      {products.map((product, index) => (
        <GameCard key={index} title={product.title} price={product.price} />
      ))}
    </>
  );
}

export default Cart;
