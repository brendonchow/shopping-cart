import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const params = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [shopItems, setShopItems] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetch("https://fakestoreapi.com/products?limit=5", {
      mode: "cors",
    })
      .then((res) => {
        if (!res.ok || ignore) {
          throw new Error(res);
        }
        return res.json();
      })
      .then((json) => setShopItems(json))
      .catch((res) => {
        if (!ignore) {
          setError(res);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return params.page === "shop" ? (
    <Shop error={error} loading={loading} items={shopItems}>
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
