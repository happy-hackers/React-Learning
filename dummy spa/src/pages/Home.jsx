//import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate("/products");
  // }

  return (
    <>
      <h1>HomePage</h1>
      <Link to="products">Go to the list of Products</Link>
      {/* <button onClick={navigateHandler}>Navigate</button> */}
    </>
  );
}

export default HomePage;
