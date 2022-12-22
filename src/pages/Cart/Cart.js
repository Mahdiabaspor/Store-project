import { useEffect, useMemo } from "react";
import { Cookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import Cartitem from "../../components/CartItem";


// context
import { Usecart } from "../../Context/Cartcontext";
import { GetUserSelector } from "../../Redux/Features/Auth/AuthSlicer";

// styles
import "../../Styles/Cart.css";

// cart page
const Card = () => {
  // hooks
  const Navigate = useNavigate();
  const { Cart, pending, Err, Getcard } = Usecart();
  const user = useSelector(GetUserSelector)

  const NextPageHandler = () => {
    // check if user loged in
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (token) {
      Navigate("/confirmation");
    }

    // if user in not! loged in
    if (!token) {
      const num = Math.floor(Math.random() * 10000000000000000);
      localStorage.setItem("confirmationHandeler", num);
      Navigate("/login");
    }
  };

  // get cart after page load
  useEffect(() => {
    Getcard();
  }, []);

  return (
    <section className="cart">
      <div className="header-cart">
        <div className="cart-title ">
          <h3 className="text-start">Card</h3>
        </div>
      </div>
        {Cart?.items.length == 0 &&
            <h4 className="text-center">Card is empty !</h4> 
          }
      <div className="cart-main container-fluid ">
        <div className="row flex-column flex-md-row ">
          <div className="cart-items col col-md-8 p-0 ">
            {Cart &&
              Cart.items.map((item) => (
                <div className="mmm" key={item.product}>
                  <Cartitem id={item.product} quantity={item.qty} />
                </div>
              ))}
          </div>

          <div className="col col-md-4">
            {Cart && Cart.items.length != 0 && (
              <div className="cart-details p-1 mt-2">
                <p className=" text-center w-100">
                  Cart total Price : <span>{Cart && Cart.totalPrice}</span>
                  {!user && (
                    <div className="warning">
                      <i className="fa-solid fa-circle-exclamation"></i> you are
                      not loged in
                    </div>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="postioner">
        <div className="Cart-page-handeler">
          {!Cart?.items.length == 0 &&
            <button onClick={NextPageHandler}>Next</button> 
          }
        </div>
      </div>
    </section>
  );
};

export default Card;
