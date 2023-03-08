import games from "../games";
import GameCard from "./GameCard";

function Products() {
  return (
    <div data-testid="product-page">
      {games.map((item) => (
        <GameCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Products;
