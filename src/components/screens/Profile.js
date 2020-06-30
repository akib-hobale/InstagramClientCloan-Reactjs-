import React,{useEffect,useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from '../../App';
import decode from 'jwt-decode';

const Profile = () => {
  const [mypics,setMypics] = useState([]);
  // const {state,dispatch} = useContext(UserContext);
  const UserEmail  = decode(localStorage.getItem('jwt'));
  useEffect(()=>{
    fetch('/post/mypost',{
      headers:{
         "Authorization": localStorage.getItem("jwt"),
      }
    }).then(res=> res.json())
    .then(result =>{
      console.log(result)
      setMypics(result.result)
    })
  },[])
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
          display:'flex',
          justifyContent:"space-around",
          margin:"18px 0px",
          borderBottom:"1px solid gray "
      }}>
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
            <h4>{UserEmail.email}</h4>
            <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                <h6>40 posts</h6>
                <h6>40 followers</h6>
                <h6>40 following</h6>
            </div>
        </div>
      </div>
   
      <div className="gallary">
        {
          mypics.map(item=>{
            return (
              <img key ={item._id} className="item" src={item.photo} alt={item.title}/>    
            )
          })
        }

      </div>
    </div>
  );
};

export default Profile;
