import PropTypes from "prop-types";

const ItemCounter = ({ cart, setCart, item }) => {
  return (
    <>
      <div className="item-amount">
        <button
          className="item-decrement"
          disabled={cart[item.id].count <= 1}
          onClick={() => {
            setCart({
              ...cart,
              [item.id]: {
                count: cart[item.id].count - 1,
                price: cart[item.id].price,
              },
            });
          }}
        >
          -
        </button>
        <div className="item-count">{cart[item.id].count}</div>
        <button
          className="item-increment"
          onClick={() => {
            setCart({
              ...cart,
              [item.id]: {
                count: cart[item.id].count + 1,
                price: cart[item.id].price,
              },
            });
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

ItemCounter.propTypes = {
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default ItemCounter;
