import PropTypes from "prop-types";

const Cart = ({ children }) => {
  return <>{children}</>;
};

Cart.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Cart;
