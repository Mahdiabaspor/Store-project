import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckOutItems from "../../components/CheckOutItems";
import UseOrder from "../../Hooks/Order";
import "../../Styles/OrderById.css"

const OrderById = () => {
  const { id } = useParams();
  const { Order, GetOrderBYId } = UseOrder();
  useEffect(() => {
    GetOrderBYId(id);
  }, []);
  if (Order) {
    console.log(Order);
  }
  console.log(id);
  return (
    <div className="bk">
      <div className="shippings container-fluid">
        {Order && (
          <div className="ss row">
            {/* <div className="shiping-and-tprices col-12 col-md-6">
            <div className="shiping-adress-detailss">
              <h3>Shiping adress</h3>
              <p className="adresss">adress: <span>{Order.shippingAddress.address}</span> </p>
              <p className="citys">city: <span>{Order.shippingAddress.city}</span> </p>
              <p className="phones">
                Phone number: <span>{Order.shippingAddress.phone}</span> 
              </p>
              <p className="Postalcodes">
                Postalcode: <span>{Order.shippingAddress.postalCode}</span> 
              </p>
            </div>
            <div className="tprice-shipings">
              <p>totalprice:{Order.totalPrice}</p>
              <p>payment method : <span>cash</span> </p>
              <p>shiping price : <span>5</span> </p>
            </div>
            </div> */}
                    <div className="col-12 col-md-4 mb-2 h-100 ">
        <div className="sidebar d-colmn container-fluid mt-2">
          <div className="info w-100 mt-2">
            <div className="info-key">Address :</div>
            <div className="info-value ">{Order.shippingAddress.address}</div>
          </div>
          <div className="info w-100">
            <div className="info-key">city :</div>
            <div className="info-value">{Order.shippingAddress.city}</div>
          </div>
          <div className="info w-100">
            <div className="info-key">Postal_Code :</div>
            <div className="info-value">{Order.shippingAddress.postalCode}</div>
          </div>
          <div className="info w-100">
            <div className="info-key">Phone :</div>
            <div className="info-value">{Order.shippingAddress.phone}</div>
          </div>
          <div className="info w-100">
            <div className="info-key">Shiping Price :</div>
            <div className="info-value">8 T</div>
          </div>
          <div className="info w-100">
            <div className="info-key">Payment Method :</div>
            <div className="info-value">Cash</div>
          </div>
          <div className="info w-100">
            <div className="info-key">TotalPrice :</div>
            <div className="info-value">{Order.totalPrice} T</div>
          </div>
        </div>
        </div>
            <div className="items-checkout col-12 col-md-6 ">
              {Order &&
                Order.orderItems.map((item) => 
                <div className="item-checkout d-flex my-3">
                    <img className="mx-3" src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg" alt="2" />
                    <p>{item.product.name} <span className="h4">* </span><span className="red-qty">{item.qty}</span></p>
                </div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderById;
