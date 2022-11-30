import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <div className="nav-links">
            {links.map((link, index) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  onClick={toggle}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
