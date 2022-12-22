import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/Signup";
import { GetUserSelector ,logout } from "../../Redux/Features/Auth/AuthSlicer";
import "../../Styles/Login.css";


const Logout = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(GetUserSelector)
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[user])
  const [cookies ] = useCookies(["token"]);


  const logouthandeler = () => {
    dispatch(logout())
    navigate('/')
  };
  return (
    <div className="back">
      {cookies.token && (
        <div>
        <div className="log-out">
          <h2>you already loged in !</h2>
          <p>
            if you want to log out press the <span>button</span>
          </p>
          <button onClick={logouthandeler}>Logout</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
