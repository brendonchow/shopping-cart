import PropTypes from "prop-types";

const Shop = ({ children }) => {
  return <>{children}</>;
};

Shop.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Shop;
