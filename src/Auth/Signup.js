import {  useState } from "react";


// API 
import API from "../API/API";


// create authProvider 
const Signup = () => {


  // states
  const [massage, setmassage] = useState(false);
  const [isSignup,setisSignup]=useState(false)

  const [Suser,setSuser]=useState(null)
  const [error, seterror] = useState(null);
  const [pending, setpending] = useState(false);

 
  
  // signup method
  const signup = async (data) => {
    setpending(true);

    // request to API
    const { res, err } = await API("user/signup", "post", data);

    // check if response
    if (res) {
      setpending(false)
      setmassage(true);
      setisSignup(true)
      setSuser(res.data.status);
    }
    if (err) {

      seterror(err);
      setpending(false)
    }
    // setpending(false);
  };

 
  

  return {signup , massage,isSignup,Suser,error,pending}
};
export default Signup
