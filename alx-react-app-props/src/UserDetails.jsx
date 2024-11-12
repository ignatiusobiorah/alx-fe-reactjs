import React, {useContext} from "react";
import UserContext from "./components/UserContext";

function UserDetails() {
    const {userData, abNumb} = useContext(UserContext)
    return (
      <div>
        <p>Name: {userData?.name}</p>
        <p>Email: {userData?.email}</p>
        <p>Ab Number: {abNumb}</p>
      </div>
    );
  }
  
  export default UserDetails;