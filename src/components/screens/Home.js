import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/post/allpost", {
      'Authorization': localStorage.getItem("jwt"),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.result);
      });
  }, []);

  const likePost= (id)=>{
    fetch('/post/like',{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("jwt")
      },
      body:JSON.stringify({postId:id})
    }).then(res=>res.json()).then(result=>{
      const newData = data.map(item=>{
        if(item._id === result._id){
          return result;
        } else {
          return item;
        }
      })
      setData(newData)
    })
  }

  const UnlikePost= (id)=>{
    fetch('/post/unlike',{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("jwt")
      },
      body:JSON.stringify({postId:id})
    }).then(res=>res.json()).then(result=>{
      const newData = data.map(item=>{
        if(item._id === result._id){
          return result;
        } else {
          return item;
        }
      })
      setData(newData)
      console.log(result);
    })
  }
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.posts[0].name}</h5>
            <div className="card-image">
              <img src={`http://localhost:5000/${item.photo}`}/>
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              <i className="material-icons" onClick={()=>{likePost(item._id)}}>thumb_up</i>
              <i className="material-icons" onClick={()=>{UnlikePost(item._id)}}>thumb_down</i>
        <h6>{item.likes.length ? 0 : null } likes</h6>
        <h6>{item.title}</h6>
        <p>{item.body}</p>
              <input type="text" placeholder="comment...." />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
