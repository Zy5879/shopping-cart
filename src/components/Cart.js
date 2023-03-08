import useShop from "../ShopContext";

function Cart() {
  const { products, total, removeQuantity, removeFromCart, updateQty } =
    useShop();

  function handleClick(e, id) {
    products.map((product) => {
      return removeFromCart(product);
    });
  }

  function add(e, id) {
    products.map((product) => {
      if (product.id === id) {
        return updateQty(product);
      } else {
        return product;
      }
    });
  }

  function subtract(e, id) {
    const grabproduct = products.find((product) => product.id === id);
    if (grabproduct.qty > 1) {
      return removeQuantity(grabproduct);
    } else {
      return removeFromCart(grabproduct);
    }
  }

  const productmap = products.map((product) => {
    return (
      <div key={product.id}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <div className="counter">
          <button onClick={(e) => subtract(e, product.id)}>-</button>
          <div className="counter--count">
            <p>{product.qty}</p>
          </div>
          <button onClick={(e) => add(e, product.id)}>+</button>
        </div>
        <p className="remove--item" onClick={(e) => handleClick(e, product.id)}>
          Remove Item
        </p>
      </div>
    );
  });

  return (
    <div data-testid="cart">
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
    </div>
  );
}

export default Cart;
