//components
import CheckOutItems from "../../components/CheckOutItems";
import UseOrder from "../../Hooks/Order";

// styles
import "../../Styles/Checkout.css";

// checkout page
const CheckOut = () => {
  // get items from local storage
  const cart = JSON.parse(localStorage.getItem("cart"));
  const ShipingAdress = JSON.parse(localStorage.getItem("ShipingAdress"));
  const user = JSON.parse(localStorage.getItem("user"));

  const { Order, SubmitOrder, err, pending } = UseOrder();

  const OrderItems = [];
  const ShippingInfo = {
    address: ShipingAdress.address,
    city: ShipingAdress.city,
    postalCode: ShipingAdress.postalCode,
    phone: ShipingAdress.phone,
  };

  for (let i = 0; i < cart.items.length; i++) {
    OrderItems.push(cart.items[i]);
  }

  const SubmitOrderHandeler = async () => {
    await SubmitOrder(OrderItems, ShippingInfo);
  };

  return (
    <div className="checkout container-fluid ">
      <div className="row">
        <div className="col-12 col-md-4 mb-2 h-100 ">
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
            <div className="info-value">{ShippingInfo.postalCode}</div>
          </div>
          <div className="info w-100">
            <div className="info-key">Phone :</div>
            <div className="info-value">{ShippingInfo.phone}</div>
          </div>
        </div>
        </div>
        <div className="d-colmn col-12 col-md-8 p-0">
          <div className="items-checkout">
            {cart &&
              cart.items.map((item) => (
                <CheckOutItems id={item.product} qty={item.qty} />
              ))}
          </div>
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
  );
};

export default CheckOut;
