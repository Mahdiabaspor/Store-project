
import { useEffect, useState } from "react";

import "../../Styles/Login.css";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { 
  GetUserErrorSelector,
  GetUserLoadingSelector,
  GetUserSelector,
  GetUserStatusSelector ,
  authLoginThunk } from "../../Redux/Features/Auth/AuthSlicer";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const confirmation = localStorage.getItem("confirmationHandeler") ?? null;
  useEffect(() => {
    if (user && confirmation) {
      navigate("/card");
      localStorage.removeItem("confirmationHandeler");
    } else if (user) {
      navigate("/error-400");
    }
    // eslint-disable-next-line
  }, []);

  const [Error, setError] = useState({});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const error = useSelector(GetUserErrorSelector);
  const user = useSelector(GetUserSelector);
  const pending = useSelector(GetUserLoadingSelector);
  // const status = useSelector(GetUserStatusSelector);



  useEffect(()=>{
    let err = {};
    if (email.length === 0 || password.length === 0){
        err.noAccses = true
    }
    if (email.length < 5 && email.length >= 1) {
      err.email = "username must be more than 5 charecters"
    }
    
    const passRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})$/
    if (!passRegex.test(password) && password.length >= 1) {
      err.password = "Password has Invalid format"
    }
    setError(err)
  },[email,password])

const dispatch = useDispatch()
  const SubmitHandeler = async (e) => {
    e.preventDefault();

    // setError({})

    // if (Object.keys(Error).length !== 0) {
    //   return;
    // }

    const data = {
      email ,
      password
    }
    localStorage.setItem('ur',JSON.stringify(data))
     dispatch(authLoginThunk(data))

  };
  let u = JSON.parse(localStorage.getItem("ur") ?? null) 
  useEffect(()=>{
    if (u){

      setemail(u.email)

      setpassword(u.password)
      console.log(u)
    }
  },[])

  return (
    <section className="login">
      {pending ? <Loading /> : (
        <div>

          {!user ? (
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
                    // required="required"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label htmlFor="username">Username or Email</label>
                  {Error?.email && <p className="Err-msg text-danger ">{Error.email}</p>}
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
                  {Error?.password && <p className="Err-msg text-danger ">{Error.password}</p>}
                </div>
              {error ? <p className="text-danger">Wrong Username Our Password !!</p> :null}
    
                <input type="submit" value="submit" className="Login-btn" />
                <Link to="/register">
                  you dont have account? <span>register</span>
                </Link>
              </form>
            </div>
          ) : (
            <div className="log-out">
            <h2>Wellcome!</h2>
            <Link to="/">home</Link>
          </div>
          )}
        </div>
      )}


    </section>
  );
};

export default Login;