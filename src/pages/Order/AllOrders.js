import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseOrder from "../../Hooks/Order";
import "../../Styles/AllOrders.css";

const AllOrders = () => {
    const {Orders,GetAllOrders,pending,err} =UseOrder()

    useEffect(()=>{
        GetAllOrders()
    },[])

    console.log(Orders)
    return ( <div className="all-orders">
        {Orders && Orders.map((order)=>(
            <div className="order-item" key={order._id}>
                <h4>delivered</h4>
                <Link to={`/order/${order._id}`}>
                
                <div className="order-item-details">
                    <h5>orderId : {order._id}</h5>
                    <p>totalPrice :<span>{order.totalPrice}</span> </p>
                </div>
                </Link>
                <div className="order-imgages">
                    {order.orderItems.map((item)=>(
                        // <img src="{item.product.image}" alt="img" />
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg" alt="img" />
                    ))}
                </div>
            </div>
        
        ))}
    </div> );
}
 
export default AllOrders;