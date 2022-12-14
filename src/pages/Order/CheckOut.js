//components
import { Link, useNavigate } from "react-router-dom";
import CheckOutItems from "../../components/CheckOutItems";
import Loading from "../../components/Loading";
import UseOrder from "../../Hooks/Order";
import { useEffect, useState } from "react";

// styles
import "../../Styles/Checkout.css";

// checkout page
const CheckOut = () => {
  // get items from local storage
  const cart = JSON.parse(localStorage.getItem("cart"));
  const ShipingAdress = JSON.parse(localStorage.getItem("ShipingAdress"));
  const [ShippingInfo, setShippingInfo] = useState({});

  const { Order, SubmitOrder, pending } = UseOrder();

  const navigate = useNavigate()


  const OrderItems = [];
  useEffect(() => {
    var userValidator =localStorage.getItem('user') ?? null
    if(!userValidator){
      navigate("/forbiden")
    }
    if (ShipingAdress) {
      setShippingInfo({
        address: ShipingAdress.address,
        city: ShipingAdress.city,
        postalCode: ShipingAdress.postalCode,
        phone: ShipingAdress.phone,
      });
    }

    if (cart) {
      for (let i = 0; i < cart.items.length; i++) {
        OrderItems.push(cart.items[i]);
      }
    }
  }, []);

  const SubmitOrderHandeler = async () => {
    await SubmitOrder(OrderItems, ShippingInfo);
  };

  return (
    <div>
      {pending ? (
        <Loading />
      ) : (
        <div className="checkout container-fluid ">
          {!Order ? (
            <div className="row">
              <div className="col-12 col-md-4 mb-2 h-100 ">
                {ShippingInfo && (
                  <div className="sidebar d-colmn container-fluid mt-2">
                    <div className="info w-100 mt-2">
                      <div className="info-key">Address :</div>
                      <div className="info-value ">{ShippingInfo.address}</div>
                    </div>
                    <div className="info w-100">
                      <div className="info-key">city :</div>
                      <div className="info-value">{ShippingInfo.city}</div>
                    </div>
                    <div className="info w-100">
                      <div className="info-key">Postal_Code :</div>
                      <div className="info-value">
                        {ShippingInfo.postalCode}
                      </div>
                    </div>
                    <div className="info w-100">
                      <div className="info-key">Phone :</div>
                      <div className="info-value">{ShippingInfo.phone}</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-colmn col-12 col-md-8 p-0">
                <div className="items-checkout">
                  {cart &&
                    cart.items.map((item) => (
                      <CheckOutItems id={item.product} qty={item.qty} key={item.product} />
                    ))}
                </div>
                <div>

                <button className="mx-4"
                  onClick={() => {
                    navigate("/card");
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    SubmitOrderHandeler();
                  }}
                >
                  Done
                </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="log-out">
              <h2>Thanks for Choosing us  !</h2>
              <Link to="/profile">go to your profile</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckOut;
