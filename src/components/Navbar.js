import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // const {isSidebarOpen} = useSelector(state => state)

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" onClick={() => toggle()} className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              onClick={() => dispatch(logoutUser())}
              className="dropdown-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
