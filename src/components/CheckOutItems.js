import { useEffect } from "react";

// hooks
import useProducts from "../Hooks/Useproducts";

// get product items detail from cart
const CheckOutItems = ({id,qty}) => {
    //hooks
    const {Product,GetproductsBYid}= useProducts()

    // get product details by their id after page load
    useEffect(()=>{
        GetproductsBYid(id)
    },[])
    return ( <div className="checkout-cart-item" key={id}>
        {Product && (
            <div className="chekout-detail-items">
                <div className="chekoout-img">

                {/* <img src={Product.image} alt="product-image" /> */}
                <img src="https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy6L._AC._SR360,460.jpg" alt="product-image" />
                </div>
                <div className="product-checkout-details">
                    <h4>{Product.name}</h4>
                    <div className="detaillls">
                    <p>price: <span className="price">{Product.price}</span></p>
                    <p>quantity: <span className="qty">{qty}</span></p>
                    <p>totalprice <span>{Product.price * qty}</span></p>
                    </div>

                </div>

            </div>
        )}
    </div> );
}
 
export default CheckOutItems;