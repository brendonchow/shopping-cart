import { Link } from "react-router-dom";
import PropType from "prop-types";

const Navbar = ({ current, numberOfItems }) => {
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
        <h2 className="cart-link">
          Cart{" "}
          {numberOfItems > 0 && (
            <span className="cart-items-count">{numberOfItems}</span>
          )}
        </h2>
      </Link>
    </header>
  );
};

Navbar.propTypes = {
  current: PropType.string.isRequired,
  numberOfItems: PropType.number.isRequired,
};

export default Navbar;
