import PropTypes from "prop-types";
import ItemCounter from "./ItemCounter";

const Shop = ({ children, error, loading, items, cart, setCart }) => {
  return (
    <>
      {children}
      <main className="shop main">
        {error ? (
          <div className="error">ERROR: {error.message}</div>
        ) : loading ? (
          <div className="loading">Loading...</div>
        ) : (
          items.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.title} className="item-image" />
              <b>{item.title}</b>
              <b>$ {item.price}</b>
              <p>Rating: {item.rating.rate}</p>
              <p>Number of ratings: {item.rating.count}</p>
              {cart[item.id] ? (
                <ItemCounter cart={cart} setCart={setCart} item={item} />
              ) : (
                <button
                  className="add-cart"
                  onClick={() => {
                    setCart({
                      ...cart,
                      [item.id]: { count: 1, price: item.price },
                    });
                  }}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          ))
        )}
      </main>
    </>
  );
};

Shop.propTypes = {
  children: PropTypes.object.isRequired,
  error: PropTypes.instanceOf(TypeError),
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Shop;
