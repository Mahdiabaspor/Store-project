import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/API";

const UseOrder = () => {
    const navigate = useNavigate()
    const [Order, setOrder]= useState(null)
    const [pending, setpending] = useState(false)
    const [err, seterr] = useState(null)
    const [Orders, setOrders]= useState(null)
    const SubmitOrder = async(orderItems,ShippingAddress)=>{
        setpending(true)
        const body = {
            orderItems,
            shippingAddress:{
            address:ShippingAddress.address,
            city: ShippingAddress.city,
            postalCode: ShippingAddress.postalCode,
            phone: ShippingAddress.phone,
            },
            paymentMethod: "cash",
            shippingPrice: "5",
            totalPrice: "5"
        }
        console.log(body)
        const {res,err}= await API('order/submit','POST',body)
        if (res){
            setOrder(res.data)
            localStorage.removeItem('cart')
            localStorage.removeItem('ShipingAdress')
            console.log(res.data)
            navigate('/')

        }
        if(err){
            seterr(err)
            console.log(err.response.data)
        }
        setpending(false)
    }
    const GetAllOrders = async()=>{
        setpending(true)
        const {res,err}= await API('order')
        if(res){
            setOrders(res.data)
        }
        if(err){
            seterr(err)
        }
        setpending(false)
    }
    const GetOrderBYId = async(id)=>{
        setpending(true)
        const {res,err}= await API('order/'+id)
        if(res){
            setOrder(res.data)
            console.log(res.data)
        }
        if(err){
            seterr(err)
        }
        setpending(false)
    }
    return { Order,pending,err,SubmitOrder,GetAllOrders,GetOrderBYId , Orders};
}
 
export default UseOrder;