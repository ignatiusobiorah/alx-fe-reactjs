import React, {useContext} from "react";
import UserContext from "./UserContext";

// const UserProfile = () => {
//   const {userData, abNumb} = useContext(useContext);
//   return (
//     <div>
//         <h2>{userData?.name}</h2>
//         <p>Bio: {abNumb}</p>
//     </div>
//   )
// }

function UserProfile() {
  const {userData, abNumb} = useContext(UserContext);
  return (
      <div>
        <h2>{userData?.name}</h2>
        <p>Bio: {abNumb}</p>
      </div>
  );
}

export default UserProfile;