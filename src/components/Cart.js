import useShop from "../ShopContext";
import GameCard from "./GameCard";

function Cart() {
  const { products } = useShop();

  return (
    <>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.qty}</p>
          </div>
          // <GameCard
          //   key={product.id}
          //   title={product.title}
          //   price={product.price}
          // />
        ))
      ) : (
        <div className="empty--cart">
          <h1>Your Cart is Empty</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
