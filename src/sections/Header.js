
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ".././Styles/Sections/Header.css";
import ButtonDarkExample from "../components/dropDown";
// import { useEffect, useState } from "react";

import { Usecart } from "../Context/Cartcontext";
import { GetUserSelector } from "../Redux/Features/Auth/AuthSlicer";

const Header = () => {

  const user = useSelector(GetUserSelector)
  const { Cart }= Usecart()


  
  
  return (
    <header className="header-total container-fluid">
      <div className="topheader row">
        <div className="header-Links col-lg-3 col-3 d-flex justify-content-center align-items-center">
          <Link to="/card" className="card d-lg-block d-none">
            <i className="fa-solid fa-cart-shopping icon"></i>
            {Cart?.items && <div className="card-count">{Cart.items.length}</div>}
          </Link>
          {user ? (
            <ButtonDarkExample />
          ) : (
            <Link to="/login" className="login-signup">
              <i className=".warper fa-solid fa-right-to-bracket"></i><span className="d-md-inline d-none">Login{" "}
              | Signup</span>
            </Link>
          )}
        </div>
        <div className="search col-4 col-lg-6 p-0 m-0">
          <i className="fa-solid fa-magnifying-glass d-lg-block d-none"></i>
          <input type="text" className="serchbox " placeholder="Serch..." />
        </div>
        <Link to="/" className="col-5 col-lg-3">
          <h2 className="Icon">Shopname</h2>
        </Link>
      </div>

      <div className="header">
        <ul>
          {user && (
            <li className="d-inline d-lg-none">
              <Link to="/card" className="Link-hover">
                Cart
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/order" className="Link-hover">
                Orders
              </Link>
            </li>
          )}

          {!user && (
            <li>
              <Link to="/register" className="Link-hover">
                Signup
              </Link>
            </li>
          )}

          {!user && (
            <li>
              <Link to="/login" className="Link-hover">
                Login
              </Link>
            </li>
          )}

          <li>
            <Link to="/shop" className="Link-hover">
              Shop
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;
