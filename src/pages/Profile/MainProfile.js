import { useEffect ,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { Usecart } from "../../Context/Cartcontext";
import UseOrder from "../../Hooks/Order";
import useProfile from "../../Hooks/useProfile";

import { Image } from "react-bootstrap";

import "../../Styles/Profile.css";
import { useState } from "react";
const MainProfile = () => {

  const sidebar = useRef()
  const { GetProfile, user, pending } = useProfile();
  const { Cart, Getcard } = Usecart();
  const { Orders, GetAllOrders } = UseOrder();
  const navigate = useNavigate()
  //massage import<
  const [WarningMsg , setWarningMsg]=useState(false)
  //massage import>
  useEffect(() => {


      var userValidator =localStorage.getItem('user') ?? null
      if(!userValidator){
          navigate("/login")
      }

    GetProfile();
    Getcard();
    GetAllOrders();
    if( !user?.city || !user?.firstname || !user?.lastname || !user?.gender){
      setWarningMsg(true);
      console.log(user.city)

    }
  }, []);
  if (user) {
    console.log(user);
  }


  return (
    <div className="user-profile container-fluid">
      {pending ? <Loading/> : (

      <div className="row">
      <div className="sideba col-xl-3 d-flex justify-content-center">
          <div ref={sidebar} className="profile-sidebar container-fluid"  >
            <div className="main-detail-profile row p-1">
              <div className="col-4 d-flex align-items-center">
                <Link to="setting">
                  <i className="fa-solid fa-pen-to-square text-danger"></i>
                </Link>
              </div>
              <div className="col-8 d-flex justify-content-end align-items-center mb-2"
              
              >
                <h5 className="m-0 mx-1 text-danger">{user.username}</h5>
                <Image src={user.image} alt="dff" />
              </div>
            </div>
            <div className="profile-details container-fluid">
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Email:</h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.email}</p>
                </div>
              </div>
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Username: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.username}</p>
                </div>
              </div>
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Phone: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.mobile}</p>
                </div>
              </div>
              {user?.firstname &&
              
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Firstname: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.firstname}</p>
                </div>
              </div>
              }
              {user?.lastname &&
              
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Lastname: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.lastname}</p>
                </div>
              </div>
            }
              {user?.gender &&
              
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Gender: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.gender}</p>
                </div>
              </div>
            }
              {user?.age &&
              
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>Age: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.age}</p>
                </div>
              </div>
            }
              {user?.city &&
              
              <div className="profile-detail row  mx-1 my-3">
                <div className="profile-key col-5 ">
                <h4>City: </h4>
                </div>
                <div className="profile-value col-7 d-flex justify-content-end">
                <p>{user.city}</p>
                </div>
              </div>
            }

            </div>
          </div>
        </div>
        <div className="section-right col-xl-9 ">
          { !user?.city && (         
            <div className="alarams my-3 mx-0 mx-md-5 d-flex align-items-center">
            <i className="fa-solid fa-circle-exclamation fs-5 fs-md-1"></i>
            <p className="text-sm-small  p-2">please Complite your profile</p>
          </div>)
          

          }
          <div className="content rounded p-2 mx-0 mx-md-5">
            <div className="order-title row d-flex align-items-center   my-2 mb-4">
              <div className="col-9">
                <h3 className="border-bottom border-secondary pb-3">
                  My Orders
                </h3>
              </div>
              <div className="col-3 ">
                <Link to="/order" className="a">
                  See More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6  d-flex justify-content-center">
                <div className="state d-flex p-2 rounded">
                  <div className="d-flex flex-column justify-content-center mx-3">
                    <h4>Deliverd</h4>
                    <p>
                      <span>{Orders?.length}</span> deliverd
                    </p>
                  </div>
                  <Image src="https://www.digikala.com/statics/img/svg/status-delivered.svg" />
                </div>
              </div>
              <div className="col-md-6 mt-3 mt-md-0 d-flex justify-content-center ">
                <div className="state d-flex p-2 rounded">
                  <div className="d-flex flex-column justify-content-center mx-3">
                    <h4>Process</h4>
                    <p>
                      <span>{Cart?.items.length}</span> in progerss
                    </p>
                  </div>
                  <Image src="https://www.digikala.com/statics/img/svg/status-processing.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default MainProfile;
