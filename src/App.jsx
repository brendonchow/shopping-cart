import { useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const params = useParams();
  console.log(params);
  const [cartItems, setCartItems] = useState([]);
  return params.page === "shop" ? (
    <Shop>
      <Navbar current="shop" numberOfItems={cartItems.length} />
    </Shop>
  ) : params.page === "cart" ? (
    <Cart>
      <Navbar current="cart" numberOfItems={cartItems.length} />
    </Cart>
  ) : (
    <Home>
      <Navbar current="home" numberOfItems={cartItems.length} />
    </Home>
  );
};

export default App;
