import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";

const Cart = ({ children, cartItems, setCart, items }) => {
  const cost = Object.keys(cartItems).reduce((acc, curr) => {
    return acc + cartItems[curr].price * cartItems[curr].count;
  }, 0);
  console.log(items);
  return (
    <>
      {children}
      <div className="cart-main">
        {Object.keys(cartItems).length > 0 ? (
          <div className="cart-main-not-empty">
            <div className="cart-items">
              {items.reduce((acc, item) => {
                if (cartItems[item.id]) {
                  acc.push(
                    <div key={item.id} className="cart-item">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-item-image"
                      />
                      <div className="cart-item-info">
                        <h2 className="cart-item-title">{item.title}</h2>
                        <div className="cart-item-info-bottom">
                          <ItemCounter
                            cart={cartItems}
                            setCart={setCart}
                            item={item}
                          />
                          <div>$ {item.price}</div>
                          <button
                            type="button"
                            className="remove-cart-item"
                            onClick={() => {
                              const newObject = { ...cartItems };
                              delete newObject[item.id];
                              setCart(newObject);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>,
                  );
                }
                return acc;
              }, [])}
            </div>
            <div className="checkout">
              <div className="total">
                <div>Estimated total</div>
                <div>$ {cost.toFixed(2)}</div>
              </div>
              <Link
                to="/"
                className="checkout-button"
                onClick={() => setCart({})}
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-main-empty">
            <div className="empty-cart">
              Your cart is empty! Click below to start shopping.
            </div>
            <Link to="/shop" className="shop-button">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  children: PropTypes.object.isRequired,
  cartItems: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Cart;
