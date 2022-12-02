import { Routes, Route } from "react-router-dom";
import WelcomeRegister from "../components/Messages/WellcomeRegister";

const MassagesRoute = () => {

    return ( 
        <Routes>
            <Route path="/Wellcome" element={<WelcomeRegister/>}/>
        </Routes>
     );
}
 
export default MassagesRoute;