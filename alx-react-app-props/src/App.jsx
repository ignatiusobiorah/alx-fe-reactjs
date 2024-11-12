import './App.css'
import UserContext from './components/UserContext';
// import React from 'react';
// import { useContext } from 'react';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const abNumb = '347893478e578'


  return (
    <>
      <div>
        {/* <h1>test</h1> */}
      <UserContext.Provider value={{userData:userData, abNumb:abNumb}}>
        <ProfilePage />;
      </UserContext.Provider>
       
      </div>

    </>
  )
}

export default App
