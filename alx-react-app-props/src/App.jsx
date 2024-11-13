import './App.css'
import UserContext from './components/UserContext';
import ProfilePage from './ProfilePage';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const abNumb = '347893478e578'


  return (
    <>
      <div>
        <UserContext.Provider value={{userData:userData, abNumb:abNumb}}>
        <UserProfile />
        </UserContext.Provider>
      
      <UserContext.Provider value={{userData:userData, abNumb:abNumb}}>
      
        <ProfilePage />
      </UserContext.Provider>
       
      </div>

    </>
  )
}

export default App
