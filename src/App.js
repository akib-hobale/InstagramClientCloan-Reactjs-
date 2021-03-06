import React, { useEffect, createContext,useReducer, useContext } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter,Switch, Route, useHistory } from "react-router-dom";
import Signin from "./components/screens/Signin";
import Signup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import {reducer,initialState} from './reducers/userReducer';
import decode from 'jwt-decode';

export const UserContext = createContext();



const Routing = () => {
  const history = useHistory()
// const {state,dispatch}=useContext(UserContext)
//   useEffect(()=>{
//     const user = localStorage.getItem('jwt');     
//     if(user){
//       let userInformation = decode(user);
//       dispatch({type:"USER",payload:userInformation})
//       history.push('/');
//     } else {
//       history.push('/signin')
//     }
//   },[])
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
    </Switch>
  );
};

function App() {
const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
