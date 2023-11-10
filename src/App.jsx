import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return <Outlet />;
};

export default App;
