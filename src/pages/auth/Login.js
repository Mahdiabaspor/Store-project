import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import "../../Styles/Login.css";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const { login, error, user, pending } = useAuth();
  const confirmation = localStorage.getItem("confirmationHandeler") ?? null;
  useEffect(() => {
    if (user && confirmation) {
      navigate("/card");
      localStorage.removeItem("confirmationHandeler");
    } else if (user) {
      navigate("/error-400");
    }
    // eslint-disable-next-line
  }, [user]);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const SubmitHandeler = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <section className="login">
      {pending && <Loading />}
      {!cookies.token && !pending ? (
        <div className="back">
          <form className="Login-form" onSubmit={SubmitHandeler}>
            <h2>Please Login!</h2>
            <div className="inputBox">
              <input
                autoComplete="off"
                name="username"
                id="username"
                type="text"
                value={email}
                required="required"
                onChange={(e) => setemail(e.target.value)}
              />
              <label htmlFor="username">Username or Email</label>
            </div>
            <div className="inputBox">
              <input
                autoComplete="off"
                required="required"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>

            <input type="submit" value="submit" className="Login-btn" />
            <Link to="/register">
              you dont have account? <span>register</span>
            </Link>
          </form>
        </div>
      ) : null}
      {error && error.message}
      {user && user.name}
    </section>
  );
};

export default Login;
