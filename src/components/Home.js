import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <h1>Discover Games</h1>
        <button onClick={() => navigate("/products")}>Game Catalog</button>
      </div>
    </main>
  );
}

export default Home;
