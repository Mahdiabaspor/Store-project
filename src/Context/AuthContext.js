import { createContext, useContext, useState } from "react";
import { Cookies } from "react-cookie";

// API 
import API from "../API/API";

// create authContext
const authContext = createContext();

// create authProvider 
const AuthProvider = ({ children }) => {

  // get curent user from local storage
  const curentUser = JSON.parse(localStorage.getItem("user"));

  // states
  let [massage, setmassage] = useState(false);
  const [isSignup,setisSignup]=useState(false)
  const [user, setuser] = useState(curentUser);
  const [Suser,setSuser]=useState(null)
  const [error, seterror] = useState(null);
  const [pending, setpending] = useState(false);

  // login method 
  const login = async (email, password, Path) => {
    setpending(true);
      // create data object
      const data = {
        password,
        email,
      };

      // request to API 
      const { res, err } = await API("user/login", "post", data);

      // check if response
      if (res) {

        seterror(null);
        setuser(res.data.user);

        // set curent user to local storage
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // set token in cookies
        const cookies = new Cookies();
        cookies.set("token", res.data.user.token);
        
        setmassage(true);
      }
      if (err) {
        setuser(null);
        seterror(err);
      }
      setpending(false);
  };
  
  // signup method
  const signup = async (data) => {
    setpending(true);

    // request to API
    const { res, err } = await API("user/signup", "post", data);

    // check if response
    if (res) {
      console.log(res.data)
      setmassage(true);
      setisSignup(true)
      setSuser(res.data.status);
    }
    if (err) {
      setuser(null);
      seterror(err);
    }
    setpending(false);
  };

  // logout method
  const logout = async () => {
    setpending(true);

    // get token from cookie
    const cookies = new Cookies();
    const token = await cookies.get("token");

    // check if user is loged in befor
    if(token){

      // delete token from cookie
      cookies.set("token", "", { expires: new Date() });

      setuser(null);
      seterror(null);
      console.log("logout completed successfully");

      // delete user from local storage
      localStorage.removeItem("user");
      setmassage(true);
    }
    if(!token){
      localStorage.removeItem("user");
      console.log("error occurred while logging out");
    }
    setpending(false);
  };
  
  const value = {
    user,
    error,
    pending,
    isSignup,
    login,
    signup,
    logout,
    massage,
    Suser,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
const useAuth = () => useContext(authContext);
export { AuthProvider, useAuth };
