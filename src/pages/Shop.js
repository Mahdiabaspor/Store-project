import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Shop.css";

// custom hooks
import useProducts from "../Hooks/Useproducts";

// contexts
import { Usecart } from "../Context/Cartcontext";

// page shop
const Shop = () => {
  // states
  const [Page, setpage] = useState(1);
  const [Paginate, setPaginate] = useState([]);
  const [totalPage, settotalPage] = useState(0);

  // hooks
  const { Products, pending, Err, Getproducts } = useProducts();
  const { postCart, Cart, Getcard, decereseCart, increaserCart } = Usecart();

  // cart actions
  const incer = async (product) => {
    await increaserCart(product);
  };
  const reducer = async (product) => {
    decereseCart(product);
  };
  const AddCart = async (product) => {
    await postCart(product, 1);
  };

  // run hooks for first time
  useEffect(() => {
    setPaginate();

  }, [Products]); 

  useEffect(() => {
    Getproducts();
    Getcard();
  }, []);

  // scroll to start of page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [Page]);

  // check if product is in cart
  const checkCart = (product) => {
    if (!Cart) {
      return false;
    }

    // get index of product in "Cart.items" list
    const index = Cart.items.findIndex((item) => item.product == product._id);

    // if product is not in "Cart.items"
    if (index <= -1) {
      return false;
    }

    // add cart property to product
    product.cart = Cart.items[index];
    return true;
  };

  return (
    <div className="shop">
      <div className="Products row m-0 container-fluid">
        <div className="col-12 row ttxl">
          {Products &&
            Products.slice((Page - 1) * 8, Page * 8).map((product) => (
              <div
                className="product   col-xl-3 col-lg-4 col-md-6 col-sm-12 container-fluid  "
                key={product._id}
              >
                <div className="continer-pro d-flex d-md-grid flex-row-reverse row m-0">
                  <div className="col-5 col-md-12 d-flex">
                    <Link
                      className="d-flex align-items-center"
                      to={`/product/${product._id}`}
                    >
                      <div className="img  ">
                        <img
                          className="w-50 w-lg-90"
                          src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg"
                          alt="coverimageProduct"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="p-and-button-shop col-7 col-md-12 m-0 p-0  ">
                    <h4 className="">{product.name}</h4>
                    {product.countInStock > 0 ? (
                      <detail className="instock">
                        {product.countInStock + " in access"}
                      </detail>
                    ) : (
                      <detail className="instock">not in stock</detail>
                    )}
                    <p>price: {product.price}$</p>
                    <p>Rating {product.rating}</p>
                    <p>
                      {checkCart(product) ? (
                        <div className="cart-inc-dec">
                          <button
                            className="shop-inc-btn"
                            onClick={() => reducer(product)}
                          >
                            -
                          </button>
                          {product.cart.qty === 1 ? (
                            <span>
                              <i class="fa-solid fa-trash"></i>
                            </span>
                          ) : (
                            <span> {product.cart.qty} </span>
                          )}
                          <button
                            className="shop-inc-btn"
                            onClick={() => {
                              if (product.cart.qty < product.countInStock) {
                                incer(product);
                              }
                            }}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="shop-add-btn"
                          onClick={() => {
                            AddCart(product);
                          }}
                        >
                          ADD to Cart
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="pagination">
        <div className="pages">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev
              onClick={() => {
                if (Page > 1) {
                  setpage((last) => last - 1);
                }
              }}
            />
            <Pagination.Ellipsis />
            {Products &&
              Products.filter((item, index) => index % 8 === 0).map((item, index) => (
                <Pagination.Item
                  active={Page === index + 1}
                  onClick={() => setpage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            <Pagination.Ellipsis />

            <Pagination.Next
              onClick={() => {
                if (Page < Products % 10 -1) {
                  setpage((last) => last + 1);
                }
              }}
            />

            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Shop;
