import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate , Navigate } from "react-router-dom";

// styles
import "../../Styles/ShipingAdress.css"

// shiping adress page
const ShipingAdressfrom = () => {
    // states
    const [address,setaddress]= useState('');
    const [phone,setphone]= useState('');
    const [postalCode,setpostalCode]= useState('');
    const [city,setcity]= useState('');
    const [shipingAdressPage,setshipingAdressPage]= useState(null);
    const [Error, setError] = useState({})
    // hooks
    const navigate = useNavigate()
    useEffect(()=>{

      var userValidator =localStorage.getItem('user') ?? null
      if(!userValidator){
        navigate("/forbiden")
      }
    },[])


    useEffect(() => {
      let err = {}

      if (address.length === 0 || phone.length === 0 || postalCode.length=== 0 || city.length === 0){
        err.noAccses="true"
      }

    
      // check address
      if (address.length <= 10 && address.length >= 1) {
        err.address = "address must be more than 10 charecters"
      }
  


      const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/
      if (!phoneRegex.test(phone) && phone.length >= 1) {
        err.phone = "invalid phone number"
      }
  
      // check Postal_Code
      const PostalRegex = /^(1[0-9]|[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/
      if (!PostalRegex.test(postalCode) && postalCode.length >= 1) {
        err.postal = "PostalCode has  Invalid format"
      }
      if (city.length <= 4 && city.length >= 1) {
        err.city = "city must be more than 4 charecters"
      }
      
  
      setError(err)
    }, [address, phone, postalCode, city])
    // get token from cookies
    const cookies = new Cookies()
    const token = cookies.get('token')



    // check and get shiping adress exist
    const shipingAdress=JSON.parse(localStorage.getItem('ShipingAdress')) || null
    
    // change state to shiping adress after any edit and reaload
    useEffect(() => {
      setshipingAdressPage(shipingAdress)
    }, [shipingAdress])
    
    // next page handeler after write shiping adress
    const NextHandler = (e)=>{

      if (Object.keys(Error).length !== 0) {
        console.log(Error)
        return
      }

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
              {Error?.address && <p className="Err-msg text-danger ">{Error.address}</p>}

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
              {Error &&  Error.city && <p className="Err-msg text-danger ">{Error.city}</p>}
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
              {Error &&  Error.phone && <p className="Err-msg text-danger ">{Error.phone}</p>}

              
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
              {Error &&  Error.postal && <p className="Err-msg text-danger ">{Error.postal}</p>}

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