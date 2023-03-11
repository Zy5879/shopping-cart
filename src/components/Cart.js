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
      <div className="bg-white shadow-lg" key={product.id}>
        <img
          className="w-full aspect-square rounded-sm"
          src={product.img}
          alt={product.title}
        />
        <div className="p-3 rounded-sm">
          <p>{product.title}</p>
          <p>{product.price}</p>
          <div className="flex items-center mt-2 ">
            <button
              className="mr-2 text-base"
              onClick={(e) => subtract(e, product.id)}
            >
              -
            </button>
            <div className="counter--count">
              <p>{product.qty}</p>
            </div>
            <button
              className="ml-2 text-base"
              onClick={(e) => add(e, product.id)}
            >
              +
            </button>
          </div>
          <button
            className=" mt-3 p-2 border-2 border-orange-700 text-orange-700 rounded-sm"
            onClick={(e) => handleClick(e, product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className=" w-full h-screen bg-slate-100" data-testid="cart">
      {products.length > 0 ? (
        <div>
          <h1 className="text-center text-3xl font-bold p-3">
            Estimated Total: ${Math.round(total / 10) * 10}
          </h1>
          <div className="p-3 gap-4 grid grid-cols-cart">{productmap}</div>
        </div>
      ) : (
        <div className="bg-slate-100 w-full h-screen">
          <h1 className="text-center text-3xl font-bold p-3">
            Your Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
