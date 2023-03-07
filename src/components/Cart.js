import useShop from "../ShopContext";

function Cart() {
  const { products, total, removeQuantity, removeFromCart } = useShop();

  function handleClick(e, id) {
    products.map((product) => {
      if (product.qty > 1) {
        return removeQuantity(product);
      } else {
        return removeFromCart(product);
      }
    });
  }

  const productmap = products.map((product) => {
    return (
      <div key={product.id}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.qty}</p>
        <p className="remove--item" onClick={(e) => handleClick(e, product.id)}>
          Remove Item
        </p>
      </div>
    );
  });

  return (
    <>
      {products.length > 0 ? (
        <div>
          <h1>Total ${Math.round(total / 10) * 10}</h1>
          {productmap}
        </div>
      ) : (
        <div className="empty--cart">
          <h1>Your Cart is Empty</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
