import { Link } from "react-router-dom";
import PropType from "prop-types";

const Navbar = ({ current }) => {
  return (
    <header className="header">
      <Link
        to="/"
        className={"page-title" + (current === "home" ? " active" : "")}
      >
        <h1>Shopping Cart</h1>
      </Link>
      <Link to="/shop" className={current === "shop" ? " active" : ""}>
        <h2>Shop</h2>
      </Link>
      <Link to="/cart" className={current === "cart" ? " active" : ""}>
        <h2>Cart</h2>
      </Link>
    </header>
  );
};

Navbar.propTypes = {
  current: PropType.string.isRequired,
};

export default Navbar;
