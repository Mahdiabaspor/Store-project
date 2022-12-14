import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//sections
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import AdminHeader from "./sections/Admin/Header";
import AdminFooter from "./sections/Admin/Footer";

//routes
import MainRoutes from "./routes/MainRoutes";
import Notfound from "./components/Notfound";
import UseOrder from './Hooks/Order';
import { useEffect } from 'react';
import { Cookies } from "react-cookie";

function App() {
  const {Orders, GetAllOrders,error} =UseOrder()
  const cookies = new Cookies()
  useEffect(()=>{
    GetAllOrders()
  },[])
  useEffect(()=>{

    if(error?.response?.data.message === "please log in" || error?.response?.data.message === "jwt malformed"){

      cookies.set("token", "", { expires: new Date() });

      const user = localStorage.getItem("user") ?? null

      if(user){
        localStorage.removeItem("user");
      }
    }

  },[Orders,error])

  return (
    <Router>
      <Routes>
        <Route path="/*"
          element={
            <div className="main">
              <Header />
              <MainRoutes />
              <Footer />
            </div>
          }
        />
        <Route path="*"
          element={
            <div>
              <Header />
              <Notfound/>
              <Footer />
            </div>
          }
        />

        <Route
          path="/admin/*"
          element={
            <div className="admin">
              <AdminHeader />

              <AdminFooter />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
