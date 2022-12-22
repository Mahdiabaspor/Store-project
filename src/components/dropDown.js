import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useNavigate } from 'react-router-dom';

import "../Styles/DropDown.css";

import { logout } from '../Redux/Features/Auth/AuthSlicer';
import { useDispatch } from 'react-redux';
function ButtonDarkExample() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logouthandeler =  () => {
     dispatch(logout())
    navigate('/')

  };
  return (
    <>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="red"
        // menuVariant=""
        title={(            
        <div to="/profile" className="profile-dropdown">
          <i className="fa-solid fa-user "></i> <span className="d-md-inline d-none">Profile</span>
        </div>)}
        className="dropdown"
      >
        <Link className='dropdownlink' to='/profile'>
          <Dropdown.Item className='Dropdown-i'  as="li">
            Profile
          </Dropdown.Item>
        </Link>
        <Link className='dropdownlink' to='/profile/upload-profile-img'>
          <Dropdown.Item className='Dropdown-i'  as="li">
            Upload avatar
          </Dropdown.Item>
        </Link>
        <Link className='dropdownlink' to='/profile/change-password'>
          <Dropdown.Item className='Dropdown-i' as="li">
            Change Password
          </Dropdown.Item>
        </Link>
        <Link className='dropdownlink' to='/profile/setting'>
          <Dropdown.Item className='Dropdown-i' as="li">
            Change Profile
          </Dropdown.Item>
        </Link>
        <Link className='dropdownlink l-out'  onClick={logouthandeler}>
          <Dropdown.Item className='Dropdown-i l-out' as="li">
            log out
          </Dropdown.Item>
        </Link>
      </DropdownButton>
    </>
  );
}

export default ButtonDarkExample;