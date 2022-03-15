import React from "react";
import { useLocation,Link } from "react-router-dom";
const User = () => {
    const {state} = useLocation();
   
  return <div>
      <h4><Link to="/dashboard">Back </Link></h4>
      <h1>Last Name :  {state.lName}</h1>
      <h1>First Name : {state.name}</h1>
      <h1>User # : {state.userId}</h1>
  </div>
};

export default User;
