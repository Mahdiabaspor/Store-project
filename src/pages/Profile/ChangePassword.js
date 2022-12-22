import { useState,useEffect } from "react";
import Loading from "../../components/Loading";
import useProfile from "../../Hooks/useProfile";
import { useNavigate , Link  } from "react-router-dom";


const ChangePassword = () => {
  const [Error, setError] = useState({});
  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const { user, ChangePassword, pending,error } = useProfile();
  const navigate = useNavigate()

  useEffect(() => {
    var userValidator =localStorage.getItem('user') ?? null
    if(!userValidator){
      navigate("/forbiden")
    }
  }, [])

  useEffect(()=>{
    let err = {};
    if (oldPassword.length === 0 || newPassword.length === 0){
        err.noAccses="true"
    }

    
    const passRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})$/
    if (!passRegex.test(oldPassword) && oldPassword.length >= 1) {
      err.oldPassword = "Password has Invalid format"
    }

    if (!passRegex.test(newPassword) && newPassword.length >= 1) {
      err.newPassword = "Password has Invalid format"
    }
    setError(err)
  },[newPassword,oldPassword])

  const ChangeHandler = (e) => {
    e.preventDefault();




    if (Object.keys(Error).length !== 0) {

      return;
    }
    ChangePassword(oldPassword, newPassword);

  };
  return (
    <div className="changepassword">
      {pending ? (
        <Loading />
      ) : (
        <div>
          {!user ? (
            <div className="change-password-form">
              <h4 className="mt-5">change password</h4>
              <form className="change-password-form" onSubmit={ChangeHandler}>
                <div className="inputBox">
                  <input
                    autoComplete="off"
                    required="required"
                    name="oldPassword"
                    id="oldPassword"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                  <label htmlFor="password">oldPassword</label>
                  {Error?.oldPassword && <p className="Err-msg text-danger ">{Error.oldPassword}</p>}
                </div>
                <div className="inputBox">
                  <input
                    autoComplete="off"
                    required="required"
                    name="newPassword"
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                  <label htmlFor="password">newPassword</label>
                  {Error?.newPassword && <p className="Err-msg text-danger ">{Error.newPassword}</p>}

                </div>
                {error?.response.data.message ? <p className="text-danger">{error?.response.data.message}</p> :null}
                <input type="submit" value="submit" className="Login-btn" />
              </form>
            </div>
          ) : (
            <div className="log-out">
              <h2>your password changed !</h2>
              <Link to="/profile">go to your profile</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
