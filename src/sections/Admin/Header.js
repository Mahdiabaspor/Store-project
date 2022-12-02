import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            Admin Header
            <Link to="/">Home</Link>
        </div>
    );
}
 
export default Header