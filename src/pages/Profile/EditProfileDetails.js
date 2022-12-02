import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import useProfile from "../../Hooks/useProfile";

const EditProfile = () => {
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [gender, setgender] = useState(null);
  const [age, setage] = useState(null);
  const [city, setcity] = useState(null);
  const {user,EditProfile,pending}=useProfile()
  const submitHandeler = async(e) => {
    e.preventDefault();
    const data = {
      firstname ,
      lastname ,
      gender,
      age ,
      city ,
    };
    await EditProfile(data)
  };
  if(user){
    console.log(user)
  }
  return (
    <div className="edit-profile">
        {pending ? <Loading/> : 
        <div>
            
        {user!==200 ? (

      <div className="edit-profile-form">
        <h4>Edit profile</h4>
        <form className="edit-profile-form">
          <div className="inputBox">
            <input
              autoComplete="off"
              required="required"
              name="firstname"
              id="firstname"
              type="firstname"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <label htmlFor="firstname">firstname</label>
          </div>
          <div className="inputBox">
            <input
              autoComplete="off"
              required="required"
              name="lastname"
              id="lastname"
              type="lastname"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <label htmlFor="lastname">lastname</label>
          </div>
          <div className="inputBox">
            <input
              autoComplete="off"
              required="required"
              name="gender"
              id="gender"
              type="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
            <label htmlFor="gender">gender</label>
          </div>
          <div className="inputBox">
            <input
              autoComplete="off"
              required="required"
              name="age"
              id="age"
              type="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <label htmlFor="age">age</label>
          </div>
          <div className="inputBox">
            <input
              autoComplete="off"
              required="required"
              name="city"
              id="city"
              type="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <label htmlFor="city">city</label>
          </div>
          <button onClick={submitHandeler}>EditProfile</button>
        </form>
      </div>
        ):(
            <div className="log-out">
            <h2>your profile changed !</h2>
            <Link to='/profile'>go to your profile</Link>
          </div>
        )}
        </div>}
    </div>
  );
};

export default EditProfile;
