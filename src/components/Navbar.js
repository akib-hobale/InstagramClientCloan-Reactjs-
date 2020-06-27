import React, { useContext } from "react";
import { UserContext } from "../App";
import { reducer } from "../reducers/userReducer";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li><a href="/profile">Profile</a></li>,
        <li><a href="/create">create Post</a></li>,
      ];
    } else {
      return [
        <li><a href="/signin">Signin</a></li>,
        <li><a href="/signup">Signup</a></li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
