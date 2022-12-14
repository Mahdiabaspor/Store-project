import { useState } from "react";
import API from "../API/API";

const useProducts = () => {

    const [Products,setProducts]=useState(null)
    const [Product,setProduct]=useState(null)
    const [pending, setpending] = useState(false)
    const [Err, setErr] = useState(null)

    const Getproducts = async (/* page="1" , limit ='12' */) => {

        setpending(true)

        const {res,err}= await API(`product/`,'GET' )

        if(res){

            setErr(null)
            setProducts(res.data)
        }
        if(err){
            setErr(err)
            setProducts(null)
        }

        setpending(false)
    }

    const GetproductsBYid = async (id) => {

        setpending(true)

        const {res,err}= await API(`product/${id}`,'GET' )

        if(res){
            setErr(null)
            setProduct(res.data)
        }
        if(err){
            setProduct(null)
            setErr(err)
        }

        setpending(false)
    }
    
    return { Products, Product, pending, Err, Getproducts, GetproductsBYid } ;
}
 
export default useProducts;