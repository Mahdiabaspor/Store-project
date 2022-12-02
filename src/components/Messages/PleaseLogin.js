import { Navigate } from "react-router-dom";

const PleaseLogin = () => {
    return ( 
        <div className="message-container">
            <h2 className="message-title">plase login to acsess the page :</h2>
            <button className="message-button" onClick={<Navigate to='/login'/>}>Login</button>
        </div>
     );
}
 
export default PleaseLogin;