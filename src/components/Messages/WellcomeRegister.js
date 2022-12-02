import { Link, Navigate } from "react-router-dom";

const WelcomeRegister = () => {
    return ( 
        <div className="message-container">
            <h2 className="message-title">Wellcome to the site</h2>
            <Link  to='/login' className="message-button">login</Link>
        </div>
     );
}
 
export default WelcomeRegister;