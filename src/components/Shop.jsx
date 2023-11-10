import PropTypes from "prop-types";

const Shop = ({ children, error, loading, items }) => {
  console.log(error, loading);
  return (
    <>
      {children}
      {error ? (
        <div className="error">ERROR: {error.message}</div>
      ) : loading ? (
        <div className="loading">Loading...</div>
      ) : (
        ""
      )}
    </>
  );
};

Shop.propTypes = {
  children: PropTypes.object.isRequired,
  error: PropTypes.instanceOf(TypeError),
  loading: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
};

export default Shop;
