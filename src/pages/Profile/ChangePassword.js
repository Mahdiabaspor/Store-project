import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import useProfile from "../../Hooks/useProfile";

const ChangePassword = () => {
  const [oldPassword, setoldPassword] = useState(null);
  const [newPassword, setnewPassword] = useState(null);
  const { user, ChangePassword, pending } = useProfile();

  const ChangeHandler = (e) => {
    e.preventDefault();
    ChangePassword(oldPassword, newPassword);
    console.log(oldPassword);
    console.log(newPassword);
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
              <form className="change-password-form">
                <div className="inputBox">
                  <input
                    autoComplete="off"
                    required="required"
                    name="oldPassword"
                    id="oldPassword"
                    type="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                  <label htmlFor="password">oldPassword</label>
                </div>
                <div className="inputBox">
                  <input
                    autoComplete="off"
                    required="required"
                    name="newPassword"
                    id="newPassword"
                    type="newPassword"
                    value={newPassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                  <label htmlFor="password">newPassword</label>
                </div>
                <button onClick={ChangeHandler}>Change</button>
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
