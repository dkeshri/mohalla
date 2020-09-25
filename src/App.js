import React from 'react';
import './App.css';
// import NavBar from './Components/NavBar'
import NavBar from './Components/Navbar1'
import MyInfo from './Components/myinfo'
import Login from './Components/Pages/Login'
function App() {
  return (
    <>
      <NavBar/>
      <section>
        <MyInfo></MyInfo>
      </section>
      {/* <Login/> */}
    </>
  );
}

export default App;
