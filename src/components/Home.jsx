import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home({ children }) {
  return (
    <>
      {children}
      <main className="home-main">
        <h1>Welcome to my Shopping Cart!</h1>
        <h2 className="home-main-desc">
          TrendyHaven is your one-stop destination for fashion-forward clothing
          and exquisite jewelry for both men and women. Step into a world of
          endless possibilities and let us redefine your shopping journey.
        </h2>
        <Link to="/shop" className="shop-button">
          Shop Now
        </Link>
      </main>
    </>
  );
}

Home.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Home;
