import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate , Navigate } from "react-router-dom";

// styles
import "../../Styles/ShipingAdress.css"

// shiping adress page
const ShipingAdressfrom = () => {
    // states
    const [address,setaddress]= useState(null);
    const [phone,setphone]= useState(null);
    const [postalCode,setpostalCode]= useState(null);
    const [city,setcity]= useState(null);
    const [shipingAdressPage,setshipingAdressPage]= useState(null);

    // get token from cookies
    const cookies = new Cookies()
    const token = cookies.get('token')

    // hooks
    const navigate = useNavigate()

    // check and get shiping adress exist
    const shipingAdress=JSON.parse(localStorage.getItem('ShipingAdress')) || null
    
    // change state to shiping adress after any edit and reaload
    useEffect(() => {
      setshipingAdressPage(shipingAdress)
    }, [shipingAdress])
    
    // next page handeler after write shiping adress
    const NextHandler = (e)=>{

      e.preventDefault();
      const ShipingAdress = {
        address,
        phone,
        postalCode,
        city,
      }

      // set shiping adress to localstorage
      localStorage.setItem('ShipingAdress',JSON.stringify(ShipingAdress) );
      
      // check if user logedin
      if(token){
        navigate('/checkout')
      }
    }

    // next page handeler if shiping adress exist
    const IsAdressNext = (e)=>{
      e.preventDefault();
      if(token){
        navigate('/checkout')
      }
    }
    
    return ( 
        <div className="shipingAdressPage">
          {token ? (
            
            <form className="Adress-form">
              {shipingAdressPage ? <div className="shiping-message">
                <h2>you already have an adress do you want to continue?</h2>
                <div className="ship-btn">
                <button onClick={IsAdressNext} >Continue</button>
                <button onClick={(e)=>{
                  e.preventDefault();
                  localStorage.removeItem('ShipingAdress');
                }}>New Adress</button>
                </div>
              </div>: (
                <div>
              <h3>Enter your Adress</h3>
            <div className="inputBox input-adress ">
              <input
                autoComplete="off"
                name="adress"
                id="adress"
                type="text"
                value={address}
                required="required"
                onChange={(e) => setaddress(e.target.value)}
              />
              <label htmlFor="adress">Adress</label>
            </div>
            <div className="inputBox input-adress ">
              <input
                autoComplete="off"
                name="city"
                id="city"
                type="text"
                value={city}
                required="required"
                onChange={(e) => setcity(e.target.value)}
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="inputBox input-adress">
              <input
                autoComplete="off"
                name="phone"
                id="phone"
                type="text"
                value={phone}
                required="required"
                onChange={(e) => setphone(e.target.value)}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="inputBox input-adress">
              <input
                autoComplete="off"
                name="postalCode"
                id="postalCode"
                type="text"
                value={postalCode}
                required="required"
                onChange={(e) => setpostalCode(e.target.value)}
              />
              <label htmlFor="postalCode">postalCode</label>
            </div>
            <button className="shiping-btn" onClick={NextHandler}>Next</button>
            </div>
              )}
            </form>

          ) : <Navigate to='/login'/>}
        </div>
     );
}
export default ShipingAdressfrom;