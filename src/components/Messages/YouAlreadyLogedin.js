import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Logout from "../../pages/auth/Logout";

import { GetUserSelector ,loguout } from "../../Redux/Features/Auth/AuthSlicer";
import { useNavigate } from "react-router-dom";


const AlreadyLogined = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user = useSelector(GetUserSelector)
  const logouthandeler = () => {
    dispatch(loguout())
    navigate('/')
  };

  return (
    <div className="log-out">
      <h2>you already loged in !</h2>
      <p>
        if you want to log out press the <span>button</span>
      </p>
      <button onClick={()=>{
        logouthandeler();
        <Logout/>

      }}>Logout</button>
    </div>
  );
};

export default AlreadyLogined;
