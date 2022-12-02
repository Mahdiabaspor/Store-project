import { Routes, Route } from "react-router-dom";
import MainProfile from "../pages/Profile/MainProfile";
const ProfileRoutes = () => {
    return ( 
    <Routes>
      <Route path="/" element={<MainProfile />} />

    </Routes> );
}
 
export default ProfileRoutes;