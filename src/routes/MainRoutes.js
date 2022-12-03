import { Routes, Route } from "react-router-dom";

// pages
import Login from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";
import Signup from "../pages/auth/Signup";
import Shop from "../pages/Shop";
import MassagesRoute from "./MassageRoutes"
import ProfileRoutes from "./profileRoutes";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ShipingAdress from "../pages/Order/ShipingAdress"
import Checkout from "../pages/Order/CheckOut"
import AllOrders from "../pages/Order/AllOrders";
import OrderById from "../pages/Order/OrderById"
import ChangePassword from "../pages/Profile/ChangePassword";
import EditProfile from "../pages/Profile/EditProfileDetails";
import UploadProfileImage from "../pages/Profile/UploadProfileImage";
import Home from "../pages/Home";
import PleaseLogin from "../components/Messages/PleaseLogin"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error-400" element={<Logout />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/card" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails /> } />
      <Route path="/message/*" element={<MassagesRoute />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
      <Route path="/confirmation" element={<ShipingAdress />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<AllOrders />} />
      <Route path="/order/:id" element={<OrderById />} />
      <Route path="profile/upload-profile-img" element={<UploadProfileImage />} />
      <Route path="profile/change-password" element={<ChangePassword />} />
      <Route path="profile/setting" element={<EditProfile />} />
      <Route path="/forbiden" element={< PleaseLogin/>} />

    </Routes>
  );
};

export default MainRoutes;
