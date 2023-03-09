import { useNavigate } from "react-router-dom";
import videoBg from "../images/p5.mp4";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
      <video
        className="w-full h-screen object-cover "
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl mb-6">Discover Games</h1>
        <button
          className="p-3 px-6 pt-2 bg-blue-500 rounded-md text-white"
          data-testid="btn1"
          onClick={() => navigate("/products")}
        >
          Game Catalog
        </button>
      </div>
    </div>
  );
}

export default Home;
