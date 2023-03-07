import games from "../games";
import GameCard from "./GameCard";

function Products() {
  return (
    <div>
      {games.map((item) => (
        <GameCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Products;
