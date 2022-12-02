import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import '../../Styles/Login.css'
import { useCookies} from "react-cookie";
import {  useNavigate  } from "react-router-dom";
import WelcomeRegister from "../../components/Messages/WellcomeRegister";

const Signup = () => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate()
  useEffect(()=>{
      if (cookies.token){
        navigate('/error-400')
      }
      // eslint-disable-next-line
    },[cookies.token])
    const [mobile,setmobile]=useState('')
    const [email,setemail]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const {signup ,isSignup}=useAuth()

    const clickhandeler =async (e)=>{
        e.preventDefault();
        var data = {
          username: username,
          email: email,
          password: password,
          mobile: mobile
        };
        console.log(data)
        await signup(data)
        
    }
  return (
    <section className="signup">
    {isSignup && <WelcomeRegister/>}

    {!isSignup && (
            <div className="back">
            <form className="register-form">
              <h2>Please Register</h2>
              <div className="inputBox">

            <input
            autoComplete="off"
            required="required"
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="emial">Email </label>
              </div>
              <div className="inputBox">

            <input
            autoComplete="off"
            required="required"
              type="text"
              value={username}
              name="username"
              id="username"
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="username">Username </label>
              </div>
              <div className="inputBox">

            <input
            autoComplete="off"
            required="required"
              type="password"
              value={password}
              name="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label htmlFor="password">Password </label>
              </div>
              <div className="inputBox">
                
            <input
            autoComplete="off"
            required="required"
              type="text"
              value={mobile}
              name="mobile"
              id="mobile"
              onChange={(e) => setmobile(e.target.value)}
            />
            <label htmlFor="mobile">Mobile</label>
              </div>
            <button
              className="register-btn"
              onClick={(e) => {
                clickhandeler(e);
              }}
            >
              register
            </button>
            <Link to="/login">you already have an accont? <span>login</span></Link>
          </form>
          </div>
    )}


    </section>
  );
};

export default Signup;
