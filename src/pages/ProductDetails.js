import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Usecart } from "../Context/Cartcontext";
import useProducts from "../Hooks/Useproducts";
import "../Styles/Product-details.css"

const ProductDetails = () => {
  const { Product, GetproductsBYid, pending } = useProducts();
  const { id } = useParams();
  const { postCart, Cart, Getcard, decereseCart, increaserCart } = Usecart();
  useEffect(() => {
    GetproductsBYid(id);
    Getcard()
  }, [id]);
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
    <div className="product-details container-fluid ">
      {pending ? (
        <Loading />
      ) : (
        <div className="row justify-content-center">
          {Product ? (
            <div className="col-12 row prod-details">
              <div className="col-12 col-md-8 prod-detail">
                <h3 className="text-start mt-3">{Product.name} Brand: <span>{Product.brand}</span></h3>
                <div className="rating">
                    <p className="mx-3 mb-4">Rating : {Product.rating} <img src="https://www.digikala.com/statics/img/png/star-yellow.png" alt="star" /></p>
                </div>
                <div className="col-12 col-md-4 prod-img-catgory  d-md-none pro-detail-sm mb-3">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg"
                  alt="product img"
                />
                <div className="cat">
                <h5 className="d-inline mx-2">categorys:</h5><Link className="cat ">{Product.category}</Link>
                </div>
              </div>
                <div className="colors">
                    <h5><span className="color-span">color:</span>  {Product.color}</h5>
                    <div className="color" style={{background : `${Product.color}`}}></div>
                </div>
                <div className="description">
                    <p className="my-5 mx-3">{Product.description}</p>
                </div>
                <div className="price-shoping">
                    <h5>Price: <span>{Product.price}</span></h5>
                    <div className="add-cartt">
                    <p>
                    { checkCart(Product) ? (
                      
                      <div className="cart-inc-dec">
                        <button  className="shop-inc-btn" onClick={() => reducer(Product)}>-</button>
                        {Product.cart?.qty === 1 ? (
                          <span>
                            <i class="fa-solid fa-trash"></i>
                          </span>
                        ) : (
                          <span> {Product.cart.qty} </span>
                        )}
                        <button className="shop-inc-btn"  onClick={() =>{
                          if(Product.cart.qty < Product.countInStock){
                            incer(Product)
                          } }}>+</button>
                      </div>
                    ) : (
                      <button className="shop-add-btn" onClick={() =>{
                        
                          AddCart(Product)
                         }}>
                        ADD to Cart
                      </button>
                    )}
                  </p>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4 prod-img-catgory d-none d-md-flex ">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg"
                  alt="product img"
                />
                <div className="cat">
                <h5 className="d-inline mx-2">categorys:</h5><Link className="cat ">{Product.category}</Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
