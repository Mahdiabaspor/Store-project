import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "../../Styles/Login.css";
const Logout = () => {
  
  const navigate = useNavigate()
  const { logout , user } = useAuth();
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[user])
  const [cookies ] = useCookies(["token"]);

  const logouthandeler = async () => {
    await logout();
    navigate('/')
  };
  return (
    <div className="back">
      {/* {!cookies.token && Navigate('/login')} */}
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
      ;
    </div>
  );
};

export default Logout;
