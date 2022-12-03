import { Link, Navigate } from "react-router-dom";

const PleaseLogin = () => {
    return ( 
        <div className="message-container">
            <h2 className="message-title">Please login to acsess page :</h2>
            <Link to={"/login"} className="Login-btn">Login</Link>
        </div>
     );
}
 
export default PleaseLogin;