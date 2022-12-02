import { Navigate } from "react-router-dom";
import useAuth from "../../auth";
import Logout from "../../pages/auth/Logout";


const AlreadyLogined = () => {
  const { logout, error, pending } = useAuth();
  const logouthandeler = async () => {
    await logout();
  };
  return (
    <div className="log-out">
      <h2>you already loged in !</h2>
      <p>
        if you want to log out press the <span>button</span>
      </p>
      <button onClick={()=>{
        logouthandeler();
        <Logout error={error} pending={pending}/>

      }}>Logout</button>
    </div>
  );
};

export default AlreadyLogined;
