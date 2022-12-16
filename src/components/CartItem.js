import { useEffect } from "react";

// hooks
import useProducts from "../Hooks/Useproducts";

// contexts
import { Usecart } from "../Context/Cartcontext";

const Cartitem = ({ id, quantity }) => {
  // hooks
  const { Product, GetproductsBYid } = useProducts();
  const { increaserCart, decereseCart } = Usecart();

  // cart actions
  const incer = async (product) => {
    await increaserCart(product);
  };
  const reducer = async (product) => {
    decereseCart(product);
  };

  // get product by id
  useEffect(() => {
    GetproductsBYid(id);
  }, []);

  return (
    <section className="cardd container-fluid ">
      {Product && (
        <div className="cartitem row">
          {/* <img src={Product.image} alt="productimg" /> */}
          <div className="col-4">
            <img className="m-0 w-100 h-100 crt-img"
              src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg"
              alt="productimg"
            />
          </div>

          <div className="cartitem-details col-8">
            <h3 className="m-0">{Product.name}</h3>
            <p>
              price : <span>{Product.price * quantity}</span>
            </p>
            <div className="cart-inc-dec">
              <button onClick={() => reducer(Product)}>-</button>
              {quantity === 1 ? (
                <span>
                  <i className="fa-solid fa-trash"></i>
                </span>
              ) : (
                <span> {quantity} </span>
              )}
              <button onClick={() => incer(Product)}>+</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cartitem;
