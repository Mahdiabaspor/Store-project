import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import '../../Styles/Login.css'
import { useCookies} from "react-cookie";
import {  useNavigate  } from "react-router-dom";
import WelcomeRegister from "../../components/Messages/WellcomeRegister";
import Loading from "../../components/Loading";

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
  const {signup ,Suser,pending}=useAuth()
  const [Error, setError] = useState({})

  useEffect(() => {
    let err = {}
    if (email.length === 0 || password.length === 0 || username.length=== 0 || mobile.length === 0){
      err.noAccses = true
  }
    // check username
    if (username.length < 5 && username.length >= 1) {
      err.username = "username must be more than 5 charecters"
    }

    // check email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email) && email.length >= 1) {
      err.email = "Email is invalid"
    }

    // check password
    const passRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})$/
    if (!passRegex.test(password) && password.length >= 1) {
      err.password = "Password has  Invalid format"
    }
    
    // check mobile
    const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/
    if (!phoneRegex.test(mobile) && mobile.length >= 1) {
      err.phone = "invalid phone number"
    }

    setError(err)
  }, [username, password, email, mobile])

  const clickhandeler = async (e) => {
    e.preventDefault();

    if (Object.keys(Error).length !== 0) {
      console.log(Error)
      return
    }

    var data = {
      username,
      email,
      password,
      mobile
    };
    
    console.log(data)
    await signup(data)
  }
  return (
    <section className="signup">
    {pending ? <Loading/> : (<div>
      
    {!Suser ? (
            <div className="back">
            <form className="register-form">
              <h2>Please Register</h2>
              <div className="inputBox">

            <input
            autoComplete="off"
            // required="required"
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="emial">Email </label>
            {Error?.email && <p className="Err-msg text-danger ">{Error.email}</p>}
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
            {Error?.username && <p className="Err-msg text-danger ">{Error.username}</p>}
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
            {Error?.password && <p className="Err-msg text-danger ">{Error.password}</p>}
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
            {Error?.phone && <p className="Err-msg text-danger ">{Error.phone}</p>}
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
    ) :(
      <div className="log-out">
      <h2>Wellcome to Family :{")"}</h2>
      <Link to="/login">go to login</Link>
    </div>
    )}
    </div>)}



    </section>
  );
};

export default Signup;
