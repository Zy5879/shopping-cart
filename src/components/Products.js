import games from "../games";
import GameCard from "./GameCard";

function Products() {
  return (
    <div
      className="p-6 gap-4 grid grid-cols-fluid bg-slate-100"
      data-testid="product-page"
    >
      {games.map((item) => (
        <GameCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Products;
