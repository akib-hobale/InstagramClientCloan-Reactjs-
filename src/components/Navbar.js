import React, { useContext } from "react";
import { UserContext } from "../App";
import { reducer } from "../reducers/userReducer";
import { Link,useHistory } from "react-router-dom";
const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const renderList = () => {
    return [
      <li>
        <a href="/profile">Profile</a>
      </li>,
      <li>
        <a href="/create">create Post</a>
      </li>,
      <li>
        <a href="/signin">Signin</a>
      </li>,
      <li>
        <a href="/signup">Signup</a>
      </li>,
      <li>
        <button
          className="btn #c62828 red darken-3"
          onClick={() => {
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
          }}
        > 
          Login
        </button>
      </li>,
    ];
    // if (state) {
    //   return [
    //     <li><a href="/profile">Profile</a></li>,
    //     <li><a href="/create">create Post</a></li>,
    //   ];
    // } else {
    //   return [
    //     <li><a href="/signin">Signin</a></li>,
    //     <li><a href="/signup">Signup</a></li>,
    //   ];
    // }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
      {/* </div>  <Link to={state ? "/" : "/signin"} className="brand-logo left"> */}
        <Link to={"/"} className="brand-logo left">
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
