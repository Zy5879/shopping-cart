import games from "../games";
function Products() {
  const gamesMap = games.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    );
  });
  return <div>{gamesMap}</div>;
}

export default Products;
