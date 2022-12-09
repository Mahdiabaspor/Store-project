import { useState } from "react";
import API from "../API/API";


const useProfile = () => {

  const [user, setuser] = useState("");
  const [error, seterror] = useState(null);
  const [pending, setpending] = useState(false);

  const GetProfile = async () => {

    setpending(true);

    const { res, err } = await API("user/profile");

    if (res) {
      setuser(res.data.user);
    }
    if (err) {
      seterror(err);
    }

    setpending(false);
  };

  const EditProfile = async (data) => {

    setpending(true);

    const { res, err } = await API("user/change-profile", "PUT", data);

    if (res) {
      if (res.data.status === 200) {
        setuser(res.data.status);
      }
    }
    if (err) {
      seterror(err);
    }

    setpending(false);
  };

  const PostProfileimage = async (formData) => {
    setpending(true);
    const { res, err } = await API("user/profile-image", "POST", formData);
    if (res) {
      if (res.data.status === 200) {
        setuser(res.data.status);
      }
    }
    if (err) {
      seterror(err);
      console.log(err)
    }
    setpending(false);
  };
  const ChangePassword = async (oldpass, newpass) => {
    setpending(true);
    const data = {
      old_password: oldpass,
      new_password: newpass,
    };
    const { res, err } = await API("user/change-password", "PUT", data);
    if (res) {
      if (res.data.status === 200) {
        setuser(res.data.status);
      }
    }
    if (err) {
      seterror(err);
      console.log(err);
    }
    setpending(false);
  };

  return { user, GetProfile, pending, error, ChangePassword, EditProfile,PostProfileimage };
};

export default useProfile;
