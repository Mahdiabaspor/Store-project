import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//sections
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import AdminHeader from "./sections/Admin/Header";
import AdminFooter from "./sections/Admin/Footer";

//routes
import MainRoutes from "./routes/MainRoutes";
import Notfound from "./components/Notfound";

function App() {
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
