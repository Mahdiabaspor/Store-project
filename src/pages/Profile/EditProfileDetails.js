import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import useProfile from "../../Hooks/useProfile";

const EditProfile = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState('male');
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const {user,EditProfile,pending}=useProfile()
  const [Error, setError] = useState({})

  useEffect(() => {
    let err = {}

    if (firstname?.length === 0 || lastname?.length === 0 || city?.length=== 0 || age?.length === 0){
      err.noAccses="true"
    }

  
    // check address
    if (firstname.length < 3 && firstname.length >= 1) {
      err.firstname = "at least 3 characters"
    }
    if (lastname.length < 3 && lastname.length >= 1) {
      err.lastname = "at least 3 characters"
    }



    const numberOnly = /^[0-9]*$/
    if (!numberOnly.test(age) && age.length >= 1 ||  2 < age.length ) {
      err.age = "invalid age number"
    }



    if (city.length < 3 && city.length >= 1) {
      err.city = "at least 3 characters"
    }
    

    setError(err)
  }, [firstname, lastname, age, city])
  const submitHandeler = async(e) => {
    if (Object.keys(Error).length !== 0) {
      console.log(Error)
      return
    }

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
        <form className="edit-profile-form" onSubmit={submitHandeler}>
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
            {Error?.firstname && <p className="Err-msg text-danger ">{Error.firstname}</p>}

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
            {Error?.lastname && <p className="Err-msg text-danger ">{Error.lastname}</p>}

          </div>
          <div className="inputBox">
          <select value={gender}  onChange={(e) => setgender(e.target.value)}>
          <option value="male">male</option>
          <option value="femaile">femaile</option>
          </select>
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
            {Error?.age && <p className="Err-msg text-danger ">{Error.age}</p>}

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
            {Error?.city && <p className="Err-msg text-danger ">{Error.city}</p>}
          </div>
          <input type="submit" value="submit" className="Login-btn" />
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
