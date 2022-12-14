import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API/API";
import Loading from "../../components/Loading";
import useProfile from "../../Hooks/useProfile";

const UploadProfileImage = () => {
  const [user, setuser] = useState(null);
  const [pending, setpending] = useState(null);
  const [err, seterr] = useState(null);
  const [image, setimage] = useState(null);
  const navigate = useNavigate()
  useEffect(()=>{
    var userValidator =localStorage.getItem('user') ?? null
    if(!userValidator){
      navigate("/forbiden")
    }

  },[])

  const submitHandeler = async () => {
    const formData = new FormData();
    formData.append("profile-image", image);
    setpending(true);
    const { res, err } = await API("user/profile-image", "POST", formData);
    if (res) {
      if (res.data.status === 200) {
        setuser(res.data.status);

      }
    }
    if (err) {
      seterr(err);

    }
    setpending(false);
  };
  return (
    <div className="change-avatar">
      <h4  className="text-center mt-4">Change Avatar:</h4>
      {pending ? (
        <Loading />
      ) : (
        <div>
          {!user ? (
            <div className=" d-flex flex-column  justify-content-center align-items-center mt-5" >
              <div className=" ">

                <input className="custom-file-input" onChange={(e) => setimage(e.target.files[0])} type='file' />

              </div>
              <button onClick={submitHandeler} className="mt-3 avatar-btn">submit</button>
            </div>
          ) : (
            <div className="log-out">
              <h2>your avatar changed !</h2>
              <Link to="/profile">go to your profile</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadProfileImage;
